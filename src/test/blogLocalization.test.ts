import { describe, it, expect } from 'vitest';
import { getAllBlogPosts, getBlogPosts, getBlogPostBySlug, getBlogIndexPath, getBlogPostPath, getBlogPostAlternates, getBlogIndexAlternates } from '../lib/blogData';
import { switchLanguageUrl } from '../lib/i18n/routes';
import type { Language } from '../lib/i18n/types';

const LANGUAGES: Language[] = ['it','en','fr','es'];
const italian = getAllBlogPosts();

describe('Four-language blog release integrity', () => {
  it('preserves the Italian original URLs and article identity', () => {
    const published = italian.filter(p => p.published !== false);
    expect(italian.length).toBe(14);
    expect(published).toHaveLength(13);
    expect(getBlogPostPath('sito-web-o-landing-page','it')).toBe('/blog/sito-web-o-landing-page');
    expect(getBlogIndexPath('it')).toBe('/blog');
  });

  it('provides a substantial, unique editorial adaptation for every original article', () => {
    for (const lang of LANGUAGES) {
      const posts = getBlogPosts(lang);
      expect(posts).toHaveLength(italian.length);
      expect(posts.map(p=>p.id)).toEqual(italian.map(p=>p.id));
      expect(new Set(posts.map(p=>p.slug)).size).toBe(posts.length);
      for (const post of posts) {
        expect(post.title.length).toBeGreaterThan(15);
        expect(post.excerpt.length).toBeGreaterThan(55);
        expect(post.content.replace(/<[^>]*>/g,' ').length).toBeGreaterThan(800);
        if (lang !== 'it') {
          expect(post.content).toMatch(/<h2>/);
          expect(post.slug).not.toEqual(italian.find(p=>p.id===post.id)?.slug);
          expect(post.content).not.toEqual(italian.find(p=>p.id===post.id)?.content);
          // Published foreign-language adaptations must go beyond an abbreviated teaser:
          // context, practical example and an editorial conclusion.
          if (post.published !== false) {
            const textWords = post.content.replace(/<[^>]*>/g, ' ').trim().split(/\s+/).filter(Boolean);
            expect(textWords.length).toBeGreaterThanOrEqual(245);
            expect((post.content.match(/<h2>/g) || []).length).toBeGreaterThanOrEqual(3);
          }
        }
      }
    }
  });

  it('keeps the unpublished course article as a draft in every language', () => {
    const unpublished = italian.filter(p=>p.published === false);
    expect(unpublished).toHaveLength(1);
    for(const lang of LANGUAGES) {
      expect(getBlogPosts(lang).filter(p=>p.published !== false)).toHaveLength(13);
      expect(getBlogPosts(lang).find(p=>p.id===unpublished[0].id)?.published).toBe(false);
    }
  });

  it('provides reciprocal alternate URLs and correct article language switch links', () => {
    const articleId = 5;
    const alternates = getBlogPostAlternates(articleId);
    expect(alternates.map(a=>a.hrefLang)).toEqual(['it','en','fr','es','x-default']);
    const fr = getBlogPosts('fr').find(p=>p.id===articleId)!;
    const es = getBlogPosts('es').find(p=>p.id===articleId)!;
    expect(getBlogPostBySlug(fr.slug,'fr')?.id).toBe(articleId);
    expect(switchLanguageUrl(getBlogPostPath(fr.slug,'fr'),'es')).toBe(getBlogPostPath(es.slug,'es'));
    expect(switchLanguageUrl('/blog/'+italian.find(p=>p.id===articleId)!.slug,'en'))
      .toBe(getBlogPostPath(getBlogPosts('en').find(p=>p.id===articleId)!.slug,'en'));
    expect(getBlogIndexAlternates()).toHaveLength(5);
  });
});
