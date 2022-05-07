import React, { useState } from 'react';
import { Group, Chip } from '@pattern/core';

export default function Demo() {
  const [checked, setChecked] = useState(false);
  return (
    <Group position="center">
      <Chip value="chip" checked={checked} onChange={setChecked}>
        Just a chip
      </Chip>
    </Group>
  );
}
