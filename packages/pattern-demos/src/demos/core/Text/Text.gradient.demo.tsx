import React from 'react';
import { Text, Group } from '@pattern/core';

export default function Demo() {
  return (
    <Group position="center">
      <Text
        component="span"
        align="center"
        variant="gradient"
        gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
        size="xl"
        weight={700}
        style={{ fontFamily: 'Greycliff CF, sans-serif' }}
      >
        Indigo cyan gradient
      </Text>
    </Group>
  );
}
