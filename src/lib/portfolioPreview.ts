/** Short, faithful excerpt from an original fictional deliverable in the portfolio.
 * Preserve words and punctuation; do not fabricate testimonials, outcome figures or quotes.
 */
export function portfolioPreview(value: string, maxCharacters = 230): string {
  const text = value.replace(/\s+/g, ' ').trim();
  if (!Number.isSafeInteger(maxCharacters) || maxCharacters < 30) {
    throw new RangeError('Preview length must be an integer of at least 30 characters');
  }
  if (text.length <= maxCharacters) return text;
  const candidate = text.slice(0, maxCharacters + 1);
  const boundary = candidate.lastIndexOf(' ');
  return (boundary >= maxCharacters * 0.65 ? candidate.slice(0, boundary) : text.slice(0, maxCharacters)).trimEnd() + '…';
}
