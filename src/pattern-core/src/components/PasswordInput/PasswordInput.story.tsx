import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { PatternProvider, PATTERN_SIZES } from '@pattern/styles';
import { PasswordInput, PasswordInputProps } from './PasswordInput';

const sizes = PATTERN_SIZES.map((size) => (
  <PasswordInput placeholder={size} key={size} size={size} mt={20} />
));

function Controlled(props: Partial<PasswordInputProps>) {
  const [value, onChange] = useState('');
  return (
    <div style={{ width: 400, padding: 20 }}>
      <PasswordInput
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
        label="Password"
        placeholder="Password"
        {...props}
      />
    </div>
  );
}

storiesOf('PasswordInput', module)
  .add('Controlled', () => <Controlled />)
  .add('Sizes', () => <div style={{ width: 400, padding: 20 }}>{sizes}</div>)
  .add('Invalid', () => <Controlled error="error" />)
  .add('Default radius on PatternProvider', () => (
    <PatternProvider theme={{ defaultRadius: 'lg' }}>
      <Controlled />
    </PatternProvider>
  ));
