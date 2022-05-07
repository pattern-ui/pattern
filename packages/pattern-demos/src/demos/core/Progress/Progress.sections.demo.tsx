import React from 'react';
import { Progress } from '@pattern/core';

function Demo() {
  return (
    <Progress
      size="xl"
      sections={[
        { value: 40, color: 'cyan' },
        { value: 20, color: 'blue' },
        { value: 15, color: 'indigo' },
      ]}
    />
  );
}

export const sections: PatternDemo = {
  type: 'demo',
  component: Demo,
};
