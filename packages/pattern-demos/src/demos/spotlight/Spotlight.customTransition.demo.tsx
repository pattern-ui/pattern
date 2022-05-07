import React from 'react';
import { Search } from 'tabler-icons-react';
import { Wrapper } from './_wrapper';

export default function Demo() {
  return (
    <Wrapper
      searchIcon={<Search size={18} />}
      transitionDuration={300}
      transition="slide-down"
      searchPlaceholder="Search..."
      shortcut="mod + shift + L"
      buttonLabel="Open spotlight with custom transition"
    />
  );
}
