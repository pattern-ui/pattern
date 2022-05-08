import React from 'react';
import { Input } from '@pattern-ui/core';

export default function Demo() {
  return (
    <>
      <Input variant="default" placeholder="Default variant" />
      <Input style={{ marginTop: 15 }} variant="filled" placeholder="Filled variant" />
      <Input style={{ marginTop: 15 }} variant="unstyled" placeholder="Unstyled variant" />
    </>
  );
}
