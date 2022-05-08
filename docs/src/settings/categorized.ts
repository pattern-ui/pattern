import { PATTERN_CORE_CATEGORIES, PATTERN_CORE_ORDER } from './pattern-core';
import { PATTERN_HOOKS_ORDER, PATTERN_HOOKS_CATEGORIES } from './pattern-hooks';

export const PATTERN_HOOKS_CATEGORIZED = {
  group: 'pattern-hooks',
  categories: PATTERN_HOOKS_CATEGORIES,
  order: PATTERN_HOOKS_ORDER,
};

export const PATTERN_CORE_CATEGORIZED = {
  group: 'pattern-core',
  categories: PATTERN_CORE_CATEGORIES,
  order: PATTERN_CORE_ORDER,
};

export const CATEGORIZED = [
  { group: 'theming', categories: {}, order: [] },
  PATTERN_HOOKS_CATEGORIZED,
  { group: 'pattern-form', categories: {}, order: [] },
  PATTERN_CORE_CATEGORIZED,
  { group: 'pattern-dates', categories: {}, order: [] },
  { group: 'Other packages', categories: {}, order: [] },
  { group: 'changelog', categories: {}, order: [] },
];
