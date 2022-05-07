import React from 'react';
import { Search } from 'tabler-icons-react';
import { Kbd, TextInput } from '@pattern/core';

function Demo() {
  const rightSection = (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Kbd>Ctrl</Kbd>
      <span style={{ margin: '0 5px' }}>+</span>
      <Kbd>K</Kbd>
    </div>
  );

  return (
    <TextInput
      placeholder="Search"
      icon={<Search size={16} />}
      rightSectionWidth={90}
      rightSection={rightSection}
      styles={{ rightSection: { pointerEvents: 'none' } }}
    />
  );
}

export const input: PatternDemo = {
  type: 'demo',
  component: Demo,
};
