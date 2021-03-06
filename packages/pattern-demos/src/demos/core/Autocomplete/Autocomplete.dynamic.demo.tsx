import React, { useState } from 'react';
import { Autocomplete } from '@pattern-ui/core';

export default function Demo() {
  const [value, setValue] = useState('');
  const data =
    value.trim().length > 0 && !value.includes('@')
      ? ['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => `${value}@${provider}`)
      : [];

  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Autocomplete
        value={value}
        onChange={setValue}
        placeholder="Start typing to see options"
        data={data}
      />
    </div>
  );
}
