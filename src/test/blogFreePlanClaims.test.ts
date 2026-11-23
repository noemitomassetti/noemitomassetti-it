import { describe, expect, it } from 'vitest';
import { getBlogPostBySlug } from '../lib/blogData';
import { getBlogPosts } from '../lib/blogData';
import { alignLegacyBlogCopy } from '../lib/blogEditorialOverrides';

describe('Blog article #3 free-plan claims', () => {
  it('qualifies Italian tool claims and avoids absolute security or backup promises', () => {
    const source = getBlogPostBySlug(3, 'it');
    expect(source).toBeDefined();
    const article = alignLegacyBlogCopy(source!);
    expect(article.title).toContain('5 strumenti digitali');
    expect(article.title).not.toContain('gratuiti');
    expect(article.excerpt).not.toContain('strumenti gratuiti');
    expect(article.content).toContain('un solo tipo di evento');
    expect(article.content).toContain('backup indipendenti');
    expect(article.content).not.toContain('in totale sicurezza');
    expect(article.content).not.toContain('al sicuro anche se il tuo computer');
    expect(article.content).not.toContain('smetti di usare la tua memoria');
  });

  it('uses accurate digital-tool titles in the other three languages', () => {
    expect(getBlogPosts('en').find(post => post.id === 3)?.title).toBe('Five digital tools for managing client work and appointments');
    expect(getBlogPosts('fr').find(post => post.id === 3)?.title).toBe('Cinq outils numériques pour organiser le suivi client et les rendez-vous');
    expect(getBlogPosts('es').find(post => post.id === 3)?.title).toBe('Cinco herramientas digitales para organizar el trabajo con clientes y citas');
  });
});
