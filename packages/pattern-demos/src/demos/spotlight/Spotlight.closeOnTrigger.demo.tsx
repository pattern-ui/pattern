import React from 'react';
import { Wrapper } from './_wrapper';

function Demo() {
  return (
    <Wrapper
      searchPlaceholder="Search..."
      shortcut="mod + shift + G"
      closeOnActionTrigger={false}
    />
  );
}

export const closeOnTrigger: PatternDemo = {
  type: 'demo',
  component: Demo,
};
