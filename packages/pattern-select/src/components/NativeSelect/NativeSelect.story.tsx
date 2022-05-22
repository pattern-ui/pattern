import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { NativeSelect, NativeSelectProps } from './NativeSelect';

const stringData = ['React', 'Angular', 'Vue', 'Svelte'];
const data = stringData.map((item) => ({ value: item, label: item }));

function Controlled(props: Partial<NativeSelectProps>) {
  const [value, onChange] = useState(null);
  return (
    <NativeSelect
      value={value}
      onChange={(event) => onChange(event.currentTarget.value)}
      data={data}
      {...props}
    />
  );
}

storiesOf('NativeSelect', module)
  .add('Controlled', () => (
    <div style={{ maxWidth: 300, padding: 20 }}>
      <Controlled placeholder="Your favorite library" />
    </div>
  ))
  .add('Uncontrolled with default value', () => (
    <NativeSelect data={stringData} placeholder="String data" defaultValue="Vue" />
  ));
