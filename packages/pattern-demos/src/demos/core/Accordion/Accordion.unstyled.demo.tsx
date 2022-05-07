import React from 'react';
import { BaseDemo } from './_base';

function Demo() {
  return <BaseDemo unstyled />;
}

export const unstyled: PatternDemo = {
  type: 'demo',
  component: Demo,
};
