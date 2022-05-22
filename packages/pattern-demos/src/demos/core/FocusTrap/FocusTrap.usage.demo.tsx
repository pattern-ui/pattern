import React from 'react';
import { useDisclosure } from '@pattern-ui/hooks';
import { FocusTrap, TextInput, Button } from '@pattern-ui/core';

export default function Demo() {
  const [active, handlers] = useDisclosure(false);

  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <Button onClick={handlers.toggle}>{active ? 'Deactivate' : 'Activate'} focus trap</Button>

      <FocusTrap active={active}>
        <div>
          <TextInput mt="sm" placeholder="First input" />
          <TextInput mt="sm" placeholder="Second input" />
          <TextInput mt="sm" placeholder="Third input" />
        </div>
      </FocusTrap>
    </div>
  );
}
