import { Index } from 'lunr';
import isEmpty from 'lodash-es/isEmpty';

import type { Article } from '@/types/article';
import type { AnyObject } from '@/types/global';

declare global {
  interface Window {
    __LUNR__: {
      [key: string]: {
        index: Index;
        store: {
          [ref: string]: AnyObject;
        };
      };
    };
  }
}

export const getSearchArticles = (query: string): Article[] => {
  if (isEmpty(query) || isEmpty(window.__LUNR__)) return [];

  const lunr = window.__LUNR__.ko;
  if (isEmpty(lunr)) return [];

  const results = lunr.index.search(`${query}*`);

  return results.map(
    ({ ref }) =>
      ({
        ...lunr.store[ref],
        id: ref,
        date: lunr.store[ref].date.split('T')[0],
      }) as Article,
  );
};
