import React from 'react';
import { Container } from '@pattern/core';
import { Demo } from './components/Demo/Demo';

export function attachDemos(stories: any, demos: Record<string, PatternDemo>) {
  Object.keys(demos).forEach((key) => {
    stories.add(`Demo: ${key}`, () => (
      <Container sx={{ paddingTop: 40, paddingBottom: 40 }} size={820}>
        <Demo data={demos[key]} />
      </Container>
    ));
  });
}
