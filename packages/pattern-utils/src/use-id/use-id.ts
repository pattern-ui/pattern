import React, { useState, useEffect, useLayoutEffect } from 'react';

const randomId = () => `pattern-${Math.random().toString(36).slice(2, 11)}`;

const useIsomorphicEffect = typeof document !== 'undefined' ? useLayoutEffect : useEffect;

const useReactId: () => string | undefined =
  (React as any)['useId'.toString()] || (() => undefined);

function useClientId() {
  const [uuid, setUuid] = useState('');

  useIsomorphicEffect(() => {
    setUuid(randomId());
  }, []);

  return uuid;
}

function getReactId() {
  const id = useReactId();
  return id ? `pattern-${id.replaceAll(':', '')}` : '';
}

export function useId(staticId?: string) {
  return staticId || getReactId() || useClientId();
}
