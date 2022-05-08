import React from 'react';
import { Wrapper } from './_wrapper';

export default function Demo() {
  return (
    <Wrapper
      searchPlaceholder="Search..."
      nothingFound="Nothing here"
      titles={['Frameworks', 'Libraries']}
      listHeight={100}
      breakpoint="sm"
      listComponent="div"
    />
  );
}
