import React from 'react';
import { useScrollLock } from '@pattern/hooks';
import { LockClosedIcon, LockOpen2Icon } from '@modulz/radix-icons';
import { Group, Button } from '@pattern/core';

export default function Demo() {
  const [scrollLocked, setScrollLocked] = useScrollLock();

  return (
    <Group position="center">
      <Button
        onClick={() => setScrollLocked((c) => !c)}
        variant="outline"
        leftIcon={scrollLocked ? <LockClosedIcon /> : <LockOpen2Icon />}
      >
        {scrollLocked ? 'Unlock scroll' : 'Lock scroll'}
      </Button>
    </Group>
  );
}
