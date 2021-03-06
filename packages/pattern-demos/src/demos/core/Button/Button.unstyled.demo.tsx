import React from 'react';
import { UnstyledButton, Group, Avatar, Text } from '@pattern-ui/core';

export default function Demo() {
  return (
    <Group position="center">
      <UnstyledButton aria-label="Open user menu" onClick={() => {}}>
        <Group>
          <Avatar size={40} color="blue">
            BH
          </Avatar>
          <div>
            <Text>Bob Handsome</Text>
            <Text size="xs" color="gray">
              bob@handsome.inc
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    </Group>
  );
}
