import React from 'react';
import { PATTERN_SIZES, Group } from '@pattern-ui/core';
import { DemoBase } from './_base';

const items = PATTERN_SIZES.map((size) => <DemoBase size={size} key={size} />);

export default function Demo() {
  return <Group position="center">{items}</Group>;
}
