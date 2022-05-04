import React from 'react';
import { Wrapper } from './_wrapper';

const code = `
import { SpotlightProvider } from '@pattern/spotlight';

function Demo() {
  return (
    <SpotlightProvider
      shortcut="mod + shift + G"
      closeOnActionTrigger={false}
      {...otherProps}
    >
      <YourApp />
    </SpotlightProvider>
  );
}
`;

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
  code,
};
