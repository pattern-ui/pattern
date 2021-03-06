import React from 'react';
import { useHash, randomId } from '@pattern-ui/hooks';
import { Group, Button, Text, Code } from '@pattern-ui/core';

export default function Demo() {
  const [hash, setHash] = useHash();

  return (
    <>
      <Group position="center">
        <Button onClick={() => setHash(randomId())}>Set hash to random string</Button>
      </Group>

      <Text align="center" mt="md">
        Current hash: <Code>{hash}</Code>
      </Text>
    </>
  );
}
