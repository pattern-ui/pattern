import React from 'react';
import { Prism } from '@pattern/prism';

const demoCode = `
import { Button } from '@pattern/core';

export default function Demo() {
  return <Button>Hello</Button>
}

function Usage() {
  return <ActionIcon>Hello</ActionIcon>;
}
`;

export default function Demo() {
  const deleted = { color: 'red', label: '-' };
  const added = { color: 'green', label: '+' };

  return (
    <Prism
      language="tsx"
      withLineNumbers
      highlightLines={{
        3: deleted,
        4: deleted,
        5: deleted,
        7: added,
        8: added,
        9: added,
      }}
    >
      {demoCode}
    </Prism>
  );
}
