import React from 'react';
import { Wrapper } from './_wrapper';

function Demo() {
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

export const scrollbars: PatternDemo = {
  type: 'demo',
  component: Demo,
};
