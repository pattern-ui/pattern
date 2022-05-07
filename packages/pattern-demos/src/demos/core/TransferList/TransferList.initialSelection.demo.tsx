import React from 'react';
import { Wrapper } from './_wrapper';

function Demo() {
  return (
    <Wrapper
      searchPlaceholder="Search..."
      nothingFound="Nothing here"
      titles={['Frameworks', 'Libraries']}
      breakpoint="sm"
      initialSelection={[['react', 'ng'], []]}
    />
  );
}

export const initialSelection: PatternDemo = {
  type: 'demo',
  component: Demo,
};
