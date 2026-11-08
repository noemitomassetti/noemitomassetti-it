import { describe, expect, it } from 'vitest';
import { portfolioPreview } from '../lib/portfolioPreview';

describe('Portfolio content previews', () => {
  it('does not change a short faithful work sample', () => {
    expect(portfolioPreview('  Prima verifica, poi conferma.  ')).toBe('Prima verifica, poi conferma.');
  });
  it('does not cut a long sample in the middle of a word', () => {
    const actual = portfolioPreview('Un documento professionale deve mantenere dati coerenti, istruzioni chiare e verifiche tracciabili. '.repeat(5), 110);
    expect(actual.endsWith('…')).toBe(true);
    expect(actual.length).toBeLessThanOrEqual(112);
    expect(actual.slice(0,-1).endsWith(' ')).toBe(false);
  });
  it('normalises whitespace while preserving source content', () => {
    expect(portfolioPreview('Uno\n\nDue \tTre')).toBe('Uno Due Tre');
  });
  it('rejects invalid preview budgets', () => {
    expect(() => portfolioPreview('testo', 0)).toThrow(RangeError);
  });
});
