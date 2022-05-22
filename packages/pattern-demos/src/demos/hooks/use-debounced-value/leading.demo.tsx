import React, { useState } from 'react';
import { useDebouncedValue } from '@pattern-ui/hooks';
import { TextInput, Text } from '@pattern-ui/core';

export default function Demo() {
  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 200, { leading: true });

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          maxWidth: 400,
          margin: 'auto',
        }}
      >
        <TextInput
          placeholder="Enter value to see debounce effect"
          value={value}
          style={{ flex: 1 }}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
      </div>
      <div style={{ maxWidth: 400, margin: 'auto', marginTop: 15 }}>
        <Text>
          <Text component="span" color="gray" size="sm">
            Value:
          </Text>{' '}
          {value.trim() || '[empty string]'}
        </Text>
        <Text>
          <Text component="span" color="gray" size="sm">
            Debounced value:
          </Text>{' '}
          {debounced.trim() || '[empty string]'}
        </Text>
      </div>
    </>
  );
}
