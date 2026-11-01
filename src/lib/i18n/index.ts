import { Language, TranslationDictionary } from './types';
import { enLocale } from './locales/en';
import { itLocale } from './locales/it';
import { frLocale } from './locales/fr';
import { esLocale } from './locales/es';

export * from './types';
export * from './routes';

const dictionaries: Record<Language, TranslationDictionary> = {
  en: enLocale,
  it: itLocale,
  fr: frLocale,
  es: esLocale,
};

export function getDictionary(lang: Language): TranslationDictionary {
  return dictionaries[lang] || enLocale;
}
