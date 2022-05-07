import React from 'react';
import { Chips, Chip } from '@pattern-ui/core';

export default function Demo() {
  return (
    <>
      <Chips position="center">
        <Chip value="1">Single chip</Chip>
        <Chip value="2">Can be selected</Chip>
        <Chip value="3">At a time</Chip>
      </Chips>

      <Chips position="center" multiple mt={15}>
        <Chip value="1">Multiple chips</Chip>
        <Chip value="2">Can be selected</Chip>
        <Chip value="3">At a time</Chip>
      </Chips>
    </>
  );
}
