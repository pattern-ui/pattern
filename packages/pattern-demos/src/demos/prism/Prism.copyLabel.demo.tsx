import React from 'react';
import { Prism } from '@pattern-ui/prism';

const demoCode = `
import { Button } from '@pattern-ui/core';

export default function Demo() {
  return <Button>Hello</Button>
}
`;

export default function Demo() {
  return (
    <>
      <Prism language="tsx" noCopy>
        {demoCode}
      </Prism>

      <Prism
        language="tsx"
        copyLabel="Copy code to clipboard"
        copiedLabel="Code copied to clipboard"
        style={{ marginTop: 20 }}
      >
        {demoCode}
      </Prism>
    </>
  );
}
