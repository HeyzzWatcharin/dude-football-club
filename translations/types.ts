import { locales } from './config';

export type Locale = typeof locales[number];

export type UIResources = {
  [key in Locale]: {
    [key: string]: string;
  };
};

export const isLocale = (lang: string): lang is Locale => {
  return locales.some((locale) => locale === lang);
};
