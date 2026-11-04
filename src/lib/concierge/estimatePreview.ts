/** Indicative deterministic estimates; never a final quote or invoice. */
export type EstimateKind = 'hourly' | 'translation' | 'localization' | 'specialist' | 'revision';
const RATE_PER_WORD: Record<Exclude<EstimateKind, 'hourly'>, number> = {
  translation: 0.09, localization: 0.11, specialist: 0.12, revision: 0.03,
};
export function estimateService(kind: EstimateKind, quantity: number): { amount: number } | null {
  if (!Number.isSafeInteger(quantity) || quantity < 1 || quantity > 100000) return null;
  if (kind === 'hourly') {
    // Published packs apply only to exact 10h and 20h selections.
    const amount = quantity === 10 ? 240 : quantity === 20 ? 460 : quantity * 25;
    return { amount };
  }
  if (!Object.prototype.hasOwnProperty.call(RATE_PER_WORD, kind)) return null;
  return { amount: Math.round(quantity * RATE_PER_WORD[kind] * 100) / 100 };
}
