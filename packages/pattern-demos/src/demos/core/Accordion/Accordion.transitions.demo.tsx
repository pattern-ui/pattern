import React from 'react';
import { BaseDemo } from './_base';

export const disableTransitions: PatternCodeDemo = {
  type: 'code',
  component: () => <BaseDemo transitionDuration={0} sx={{ maxWidth: 380 }} mx="auto" />,
  code: '<Accordion transitionDuration={0} />',
};

export const customTransitions: PatternCodeDemo = {
  type: 'code',
  component: () => <BaseDemo transitionDuration={1000} sx={{ maxWidth: 380 }} mx="auto" />,
  code: '<Accordion transitionDuration={1000} /> // -> 1000ms transition duration',
};
