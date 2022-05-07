import React from 'react';
import { Search } from 'tabler-icons-react';
import { Divider, Box } from '@pattern/core';

function Demo() {
  return (
    <>
      <Divider my="xs" label="Label on the left" />
      <Divider my="xs" label="Label in the center" labelPosition="center" />
      <Divider my="xs" label="Label on the right" labelPosition="right" />
      <Divider
        my="xs"
        variant="dashed"
        labelPosition="center"
        label={
          <>
            <Search size={12} />
            <Box ml={5}>Search results</Box>
          </>
        }
      />
      <Divider
        my="xs"
        label="Link label"
        labelProps={{ component: 'a', href: 'https://pattern-ui.design', variant: 'link', color: 'blue' }}
      />
    </>
  );
}

export const labels: PatternDemo = {
  type: 'demo',
  component: Demo,
};
