import React from 'react';
import { Wrapper } from './_wrapper';

export default function Demo() {
  return (
    <Wrapper
      searchPlaceholder="Search..."
      shortcut="mod + shift + G"
      closeOnActionTrigger={false}
    />
  );
}
