import React, { useState } from 'react';
import { useDocumentTitle, randomId } from '@pattern/hooks';
import { Group, Button } from '@pattern/core';

const code = `
import { useState } from 'react';
import { useDocumentTitle, randomId } from '@pattern/hooks';
import { Button } from '@pattern/core';

function Demo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return (
    <Button onClick={() => setTitle(randomId())}>
      Set document title to random id
    </Button>
  );
}`;

function Demo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return (
    <Group position="center">
      <Button onClick={() => setTitle(randomId())}>Set document title to random id</Button>
    </Group>
  );
}

export const useDocumentTitleDemo: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};
