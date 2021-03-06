import React from 'react';
import { Check } from 'tabler-icons-react';
import { ThemeIcon, RingProgress, Group, Text, Center } from '@pattern-ui/core';

export default function Demo() {
  return (
    <Group position="center">
      <RingProgress
        sections={[{ value: 40, color: 'blue' }]}
        label={
          <Text color="blue" weight={700} align="center" size="xl">
            40%
          </Text>
        }
      />

      <RingProgress
        sections={[{ value: 100, color: 'teal' }]}
        label={
          <Center>
            <ThemeIcon color="teal" variant="light" radius="xl" size="xl">
              <Check size={22} />
            </ThemeIcon>
          </Center>
        }
      />
    </Group>
  );
}
