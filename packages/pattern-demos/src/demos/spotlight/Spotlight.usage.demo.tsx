import React from 'react';
import { Search } from 'tabler-icons-react';
import { Wrapper } from './_wrapper';

function Demo() {
  return (
    <Wrapper
      searchIcon={<Search size={18} />}
      searchPlaceholder="Search..."
      shortcut="mod + shift + 1"
      nothingFoundMessage="Nothing found..."
    />
  );
}

export const usage: PatternDemo = {
  type: 'demo',
  component: Demo,
};
