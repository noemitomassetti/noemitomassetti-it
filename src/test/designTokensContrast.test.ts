import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

function hslToRgb(h: number, s: number, l: number): number[] {
  const hue = (((h % 360) + 360) % 360) / 60;
  const sat = s / 100;
  const light = l / 100;
  const chroma = (1 - Math.abs(2 * light - 1)) * sat;
  const x = chroma * (1 - Math.abs((hue % 2) - 1));
  const match = hue < 1 ? [chroma, x, 0] : hue < 2 ? [x, chroma, 0]
    : hue < 3 ? [0, chroma, x] : hue < 4 ? [0, x, chroma]
    : hue < 5 ? [x, 0, chroma] : [chroma, 0, x];
  const m = light - chroma / 2;
  return match.map(value => value + m);
}
function relativeLuminance(rgb: number[]): number {
  const linear = rgb.map(value => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
}
function contrastRatio(a: number[], b: number[]): number {
  const [bright, dark] = [relativeLuminance(a), relativeLuminance(b)].sort((x, y) => y - x);
  return (bright + 0.05) / (dark + 0.05);
}
function findHsl(css: string, token: string): number[][] {
  const pattern = new RegExp(`--${token}:\\s*([\\d.]+)\\s+([\\d.]+)%\\s+([\\d.]+)%`, 'g');
  return [...css.matchAll(pattern)].map(match => hslToRgb(Number(match[1]), Number(match[2]), Number(match[3])));
}
describe('Color contrast of critical UI states', () => {
  it('keeps destructive-state text WCAG AA-readable in both themes', () => {
    const css = readFileSync('src/index.css', 'utf8');
    const bg = findHsl(css, 'destructive'), fg = findHsl(css, 'destructive-foreground');
    expect(bg).toHaveLength(2); expect(fg).toHaveLength(2);
    for (let index = 0; index < 2; index++) expect(contrastRatio(bg[index], fg[index])).toBeGreaterThanOrEqual(4.5);
  });
});
