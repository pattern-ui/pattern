import React from 'react';
import { Settings } from 'tabler-icons-react';
import { ActionIcon, Group } from '@pattern-ui/core';

const icon = <Settings size={16} />;

export default function Demo() {
  return (
    <Group position="center">
      <ActionIcon variant="transparent" color="blue">
        {icon}
      </ActionIcon>
      <ActionIcon variant="hover" color="blue">
        {icon}
      </ActionIcon>
      <ActionIcon variant="default" color="blue">
        {icon}
      </ActionIcon>
      <ActionIcon variant="outline" color="blue">
        {icon}
      </ActionIcon>
      <ActionIcon variant="filled" color="blue">
        {icon}
      </ActionIcon>
      <ActionIcon variant="light" color="blue">
        {icon}
      </ActionIcon>
    </Group>
  );
}
