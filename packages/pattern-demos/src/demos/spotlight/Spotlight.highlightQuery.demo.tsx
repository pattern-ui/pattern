import React from 'react';
import { Search } from 'tabler-icons-react';
import { Wrapper } from './_wrapper';

export default function Demo() {
  return (
    <Wrapper
      searchIcon={<Search size={18} />}
      searchPlaceholder="Search..."
      shortcut="mod + alt + L"
      highlightQuery
    />
  );
}
