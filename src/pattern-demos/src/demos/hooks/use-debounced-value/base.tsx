import React, { useState } from 'react';
import { useDebouncedValue } from '@pattern/hooks';
import { TextInput, Text } from '@pattern/core';

const code = `
import { useState } from 'react';
import { useDebouncedValue } from '@pattern/hooks';
import { TextInput, Text } from '@pattern/core';

function Demo() {
  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 200);

  return (
    <>
      <TextInput
        label="Enter value to see debounce"
        value={value}
        style={{ flex: 1 }}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Text>Value: {value}</Text>
      <Text>Debounced value: {debounced}</Text>
    </>
  );
}
`;

function Demo() {
  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 200);

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
          label="Enter value to see debounce effect"
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

export const useDebouncedValueUsage: PatternDemo = {
  type: 'demo',
  component: Demo,
  code,
};
