import React from 'react';
import { BrandTwitter } from 'tabler-icons-react';
import { Button, Group } from '@pattern/core';

const code = `
import { Button } from '@pattern/core';
import { BrandTwitter } from 'tabler-icons-react';

function Demo() {
  return (
    <Button
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      href="https://twitter.com/pattern-ui"
      leftIcon={<BrandTwitter size={18} />}
      styles={(theme) => ({
        root: {
          backgroundColor: '#00acee',
          border: 0,
          height: 42,
          paddingLeft: 20,
          paddingRight: 20,

          '&:hover': {
            backgroundColor: theme.fn.darken('#00acee', 0.05),
          },
        },

        leftIcon: {
          marginRight: 15,
        },
      })}
    >
      Follow on Twitter
    </Button>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/pattern-ui"
        leftIcon={<BrandTwitter size={18} />}
        styles={(theme) => ({
          root: {
            backgroundColor: '#00acee',
            border: 0,
            height: 42,
            paddingLeft: 20,
            paddingRight: 20,

            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },

          leftIcon: {
            marginRight: 15,
          },
        })}
      >
        Follow on Twitter
      </Button>
    </Group>
  );
}

export const customize: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};
