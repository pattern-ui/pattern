import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { SubmitForm } from '@pattern-ui/storybook';
import { PATTERN_SIZES } from '@pattern-ui/styles';
import { Group } from '@pattern-ui/group';
import { TextInput } from '@pattern-ui/text-input';
import { TagInput } from './TagInput';

function Controlled() {
  const [value, setValue] = useState([]);
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TagInput value={value} onChange={setValue} placeholder="Input tag" />
      <button type="button" onClick={() => setValue(['react', 'ng'])}>
        Set value
      </button>
    </div>
  );
}

const sizes = PATTERN_SIZES.map((size) => (
  <Group grow key={size} style={{ marginTop: 30 }} direction="column">
    <TagInput
      size={size}
      variant="unstyled"
      defaultValue={['react', 'ng']}
      placeholder="Input Tag"
    />
    <TextInput label="Text input" placeholder="Text input" size={size} />
  </Group>
));

const variants = (['default', 'filled', 'unstyled'] as const).map((variant) => (
  <Group grow key={variant} style={{ marginTop: 30 }} direction="column">
    <TagInput variant={variant} placeholder="Input Tag" />
    <TextInput label="Text input" placeholder="Text input" variant={variant} />
  </Group>
));

storiesOf('TagInput', module)
  .add('Alignment', () => (
    <>
      <Group style={{ padding: 40, paddingBottom: 0 }} grow align="flex-start">
        <TagInput defaultValue={['react', 'ng']} placeholder="Input tag" />
        <TextInput label="Text input" placeholder="Input tag" />
      </Group>
      <Group style={{ padding: 40, paddingTop: 0 }} grow align="flex-start" mt="md">
        <TextInput label="Text input" placeholder="Input tag" />
        <TagInput defaultValue={['react', 'ng']} placeholder="Input tag" />
      </Group>
    </>
  ))
  .add('Controlled', () => <Controlled />)
  .add('Sizes', () => <div style={{ padding: 40 }}>{sizes}</div>)
  .add('Variants', () => <div style={{ padding: 40 }}>{variants}</div>)
  .add('Max Selected Values', () => (
    <Group style={{ padding: 40, paddingBottom: 0 }} grow align="flex-start">
      <TagInput defaultValue={['react', 'ng']} placeholder="Input tag" maxTags={5} />
    </Group>
  ))
  .add('Within form', () => (
    <SubmitForm>
      <TagInput defaultValue={['react', 'ng']} placeholder="Input tag" />
    </SubmitForm>
  ));
// .add('RTL', () => (
//   <RtlProvider>
//     <TagInput label="Tag Input" defaultValue={['react', 'ng']} placeholder="Input tag" />
//   </RtlProvider>
// ));
