import React, { useState } from 'react';
import { useDocumentTitle, randomId } from '@pattern-ui/hooks';
import { Group, Button } from '@pattern-ui/core';

export default function Demo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return (
    <Group position="center">
      <Button onClick={() => setTitle(randomId())}>Set document title to random id</Button>
    </Group>
  );
}
