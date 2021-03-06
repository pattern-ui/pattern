import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { WithinOverlays, SubmitForm, StylesAPIStory } from '@pattern-ui/storybook';
import { PatternProvider } from '@pattern-ui/styles';
import { Autocomplete } from './Autocomplete';

function DynamicData() {
  const [value, setValue] = useState('');
  const data =
    value.trim().length > 0 && !value.includes('@')
      ? ['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => ({
          value: `${value}@${provider}`,
        }))
      : [];

  return <Autocomplete value={value} onChange={setValue} placeholder="Email" data={data} />;
}

storiesOf('Autocomplete', module)
  .add('Styles API', () => (
    <StylesAPIStory
      component={Autocomplete}
      name="Autocomplete"
      withInputProps
      props={{ data: ['React'] }}
    />
  ))
  .add('Repetitive data', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Autocomplete
        placeholder="Choose value"
        data={[{ value: 'AA' }, { value: 'AAA' }, { value: 'AAAA' }]}
      />
    </div>
  ))
  .add('Fixed value', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Autocomplete
        placeholder="Choose value"
        value="React"
        onChange={() => {}}
        data={[{ value: 'React' }, { value: 'Angular' }, { value: 'Svelte' }, { value: 'Vue' }]}
      />
    </div>
  ))
  .add('Dynamic data', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DynamicData />
    </div>
  ))
  .add('Strings as data', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Autocomplete placeholder="Choose value" data={['React', 'Angular', 'Svelte', 'Vue']} />
    </div>
  ))
  .add('Within overlays', () => (
    <WithinOverlays>
      <Autocomplete
        placeholder="Choose value"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        withinPortal={false}
      />
    </WithinOverlays>
  ))
  .add('Within form', () => (
    <SubmitForm>
      <Autocomplete placeholder="Choose value" data={['React', 'Angular', 'Svelte', 'Vue']} />
    </SubmitForm>
  ))
  .add('Default props on PatternProvider', () => (
    <PatternProvider defaultProps={{ Autocomplete: { placeholder: 'Default placeholder' } }}>
      <Autocomplete data={['React', 'Angular', 'Svelte', 'Vue']} />
    </PatternProvider>
  ))
  .add('Default radius on PatternProvider', () => (
    <PatternProvider theme={{ defaultRadius: 0 }}>
      <Autocomplete data={['React', 'Angular', 'Svelte', 'Vue']} />
    </PatternProvider>
  ));
