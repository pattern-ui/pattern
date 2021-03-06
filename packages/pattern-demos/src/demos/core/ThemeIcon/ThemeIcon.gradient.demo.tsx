import React from 'react';
import { Photo } from 'tabler-icons-react';
import { Group, ThemeIcon } from '@pattern-ui/core';

export default function Demo() {
  return (
    <Group position="center">
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
        <Photo size={20} />
      </ThemeIcon>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
        <Photo size={20} />
      </ThemeIcon>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>
        <Photo size={20} />
      </ThemeIcon>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
        <Photo size={20} />
      </ThemeIcon>
      <ThemeIcon
        size="lg"
        variant="gradient"
        gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
      >
        <Photo size={20} />
      </ThemeIcon>
    </Group>
  );
}
