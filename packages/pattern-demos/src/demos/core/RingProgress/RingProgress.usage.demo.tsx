import React from 'react';
import { RingProgress, Group, Text } from '@pattern-ui/core';

export default function Demo() {
  return (
    <Group position="center">
      <RingProgress
        label={
          <Text size="xs" align="center">
            Application data usage
          </Text>
        }
        sections={[
          { value: 40, color: 'cyan' },
          { value: 15, color: 'orange' },
          { value: 15, color: 'grape' },
        ]}
      />
    </Group>
  );
}
