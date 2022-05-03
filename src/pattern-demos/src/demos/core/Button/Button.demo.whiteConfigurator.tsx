import React from 'react';
import { Database } from 'tabler-icons-react';
import { DEFAULT_THEME, Button, Group, ButtonProps } from '@pattern/core';

function Wrapper(props: ButtonProps<'button'>) {
  return (
    <Group position="center">
      <Button leftIcon={<Database size={14} />} variant="white" {...props}>
        Connect to database
      </Button>
    </Group>
  );
}

const codeTemplate = (props: string) => `
import { Button } from '@pattern/core';
import { Database } from 'tabler-icons-react';

function Demo() {
  return (
    <Button leftIcon={<Database />} variant="white"${props}>
      Connect to database
    </Button>
  );
}
`;

export const whiteConfigurator: PatternDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  background: (colorScheme) =>
    colorScheme === 'dark' ? DEFAULT_THEME.colors.dark[7] : DEFAULT_THEME.colors.gray[1],
  configurator: [{ name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' }],
};
