import React from 'react';
import { PATTERN_SIZES, Group } from '@pattern/core';
import { DemoBase } from './_base';

const items = PATTERN_SIZES.map((size) => <DemoBase size={size} key={size} />);

export function Demo() {
  return <Group position="center">{items}</Group>;
}

export const sizes: PatternDemo = {
  type: 'demo',
  component: Demo,
};
