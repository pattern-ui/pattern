import React from 'react';
import { Divider } from '@pattern-ui/core';

export default function Demo() {
  return (
    <>
      <Divider my="xs" size="xs" />
      <Divider my="xs" size="sm" />
      <Divider my="xs" size="md" />
      <Divider my="xs" size="lg" />
      <Divider my="xs" size="xl" />
      <Divider my="xs" size={10} />
    </>
  );
}
