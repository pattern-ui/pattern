import React from 'react';
import { Container } from '@pattern/core';
import { Demo } from './components/Demo/Demo';
import { ControlDemo } from './components/Demo/ControlDemo';

export function attachDemos(stories: any, demos: Record<string, PatternDemo>) {
  Object.entries(demos).forEach(([key, demo]) => {
    stories.add(`Demo: ${key}`, () => (
        <Container sx={{ paddingTop: 40, paddingBottom: 40 }} size={820}>
          {(demo as PatternCodeDemo | PatternControlDemo).type === 'control'
            ? <ControlDemo data={demo as PatternControlDemo} />
            : <Demo data={demo as PatternCodeDemo} />}
        </Container>
      ));
  });
}
