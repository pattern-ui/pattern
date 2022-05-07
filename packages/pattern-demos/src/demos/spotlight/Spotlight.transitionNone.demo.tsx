import React from 'react';
import { Search } from 'tabler-icons-react';
import { Wrapper } from './_wrapper';

function Demo() {
  return (
    <Wrapper
      searchIcon={<Search size={18} />}
      transitionDuration={0}
      searchPlaceholder="Search..."
      shortcut="mod + shift + 2"
      buttonLabel="Open spotlight without transition"
    />
  );
}

export const transitionNone: PatternDemo = {
  type: 'demo',
  component: Demo,
};
