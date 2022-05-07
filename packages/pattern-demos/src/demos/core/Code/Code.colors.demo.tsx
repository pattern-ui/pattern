import React from 'react';
import { Code, Group } from '@pattern/core';

function Demo() {
  return (
    <Group>
      <Code color="red">React.createElement()</Code>
      <Code color="teal">React.createElement()</Code>
      <Code color="blue">React.createElement()</Code>
    </Group>
  );
}

export const colors: PatternDemo = {
  type: 'demo',
  component: Demo,
};
