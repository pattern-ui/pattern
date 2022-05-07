import React from 'react';
import { JsonInput } from '@pattern/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <JsonInput
        label="Your package.json"
        placeholder="Textarea will autosize to fit the content"
        validationError="Invalid json"
        formatOnBlur
        autosize
        minRows={4}
      />
    </div>
  );
}
