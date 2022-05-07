import React from 'react';
import { Search } from 'tabler-icons-react';
import { Group, Text, Anchor } from '@pattern/core';
import { Wrapper } from './_wrapper';

function ActionsWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <Group
        position="apart"
        px={15}
        py="xs"
        sx={(theme) => ({
          borderTop: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
          }`,
        })}
      >
        <Text size="xs" color="dimmed">
          Search powered by Pattern
        </Text>
        <Anchor size="xs" href="#">
          Learn more
        </Anchor>
      </Group>
    </div>
  );
}

export default function Demo() {
  return (
    <Wrapper
      actionsWrapperComponent={ActionsWrapper}
      searchIcon={<Search size={18} />}
      searchPlaceholder="Search..."
      shortcut="mod + alt + T"
      buttonLabel="Open spotlight"
      nothingFoundMessage="Nothing found..."
    />
  );
}
