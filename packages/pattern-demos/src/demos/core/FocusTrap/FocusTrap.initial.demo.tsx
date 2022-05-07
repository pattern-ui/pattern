import React from 'react';
import { useDisclosure } from '@pattern/hooks';
import { FocusTrap, TextInput, Button } from '@pattern/core';

export default function Demo() {
  const [active, handlers] = useDisclosure(false);

  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <Button onClick={handlers.toggle}>{active ? 'Deactivate' : 'Activate'} focus trap</Button>

      <FocusTrap active={active}>
        <div>
          <TextInput mt="sm" label="First input" placeholder="First input" />
          <TextInput mt="sm" label="Second input" placeholder="Second input" data-autofocus />
          <TextInput mt="sm" label="Third input" placeholder="Third input" />
        </div>
      </FocusTrap>
    </div>
  );
}
