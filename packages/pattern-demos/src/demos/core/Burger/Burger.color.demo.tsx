import React from 'react';
import { Group } from '@pattern/core';
import { DemoBase } from './_base';

export default function Demo() {
  return (
    <Group position="center">
      <DemoBase />
      <DemoBase color="#fe6734" />
      <DemoBase color="#45f50d" />
    </Group>
  );
}
