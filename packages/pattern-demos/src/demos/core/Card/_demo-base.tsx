import React from 'react';
import { DEFAULT_THEME } from '@pattern-ui/core';

export const demoBase: Partial<PatternDemoBase> = {
  wrapper: ({ children }: { children: React.ReactNode }) => (
    <div style={{ maxWidth: 340, margin: 'auto' }}>{children}</div>
  ),
  background: (colorScheme) =>
    colorScheme === 'dark' ? DEFAULT_THEME.colors.dark[7] : DEFAULT_THEME.colors.gray[0],
};
