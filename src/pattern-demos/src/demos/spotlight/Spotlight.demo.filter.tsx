import React from 'react';
import { Search } from 'tabler-icons-react';
import { Wrapper } from './_wrapper';

const code = `
import { SpotlightProvider } from '@pattern/spotlight';

function Demo() {
  return (
    <SpotlightProvider
      shortcut="mod + alt + V"
      nothingFoundMessage="Nothing found..."
      filter={(query, actions) =>
        actions.filter((action) => action.title.toLowerCase().includes(query.toLowerCase()))
      }
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
      searchIcon={<Search size={18} />}
      searchPlaceholder="Search..."
      shortcut="mod + alt + V"
      nothingFoundMessage="Nothing found..."
      filter={(query, actions) =>
        actions.filter((action) => action.title.toLowerCase().includes(query.toLowerCase()))
      }
      buttonLabel="Open spotlight"
    />
  );
}

export const filter: PatternDemo = {
  type: 'demo',
  component: Demo,
  code,
};
