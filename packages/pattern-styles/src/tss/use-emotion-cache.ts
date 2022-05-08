import createCache, { EmotionCache, Options } from '@emotion/cache';
import { usePatternEmotionOptions } from '../theme/PatternProvider';

const defaultCacheOptions: Options = {
  key: 'pattern',
  prepend: true,
};

export const { getCache } = (() => {
  let cache: EmotionCache;
  let _key = defaultCacheOptions.key;

  function _getCache(options?: Options) {
    if (cache === undefined || _key !== options?.key) {
      _key = options?.key || 'pattern';
      cache = createCache(options?.key ? options : defaultCacheOptions);
    }

    return cache;
  }

  return { getCache: _getCache };
})();

export function useEmotionCache() {
  const options = usePatternEmotionOptions();
  return getCache(options);
}
