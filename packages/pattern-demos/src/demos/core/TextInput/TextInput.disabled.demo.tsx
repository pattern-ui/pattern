import React from 'react';
import { TextInput } from '@pattern-ui/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TextInput placeholder="Your email" disabled />

      <TextInput
        style={{ marginTop: 15 }}
        placeholder="Your email"
        disabled
        value="myemail@gmail.com"
      />
    </div>
  );
}
