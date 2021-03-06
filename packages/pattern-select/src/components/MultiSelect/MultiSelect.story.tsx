import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { PATTERN_SIZES, PatternProvider } from '@pattern-ui/styles';
import { WithinOverlays, SubmitForm } from '@pattern-ui/storybook';
import { Group } from '@pattern-ui/group';
import { TextInput } from '@pattern-ui/text-input';
import { SegmentedControl } from '@pattern-ui/segmented-control';
import { MultiSelect } from './MultiSelect';

const data = [
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
  { value: 'riot', label: 'Riot' },
  { value: 'next', label: 'Next.js' },
  { value: 'blitz', label: 'Blitz.js' },
];

const groupedData = [
  { value: 'react', label: 'React', disabled: true, group: 'FB' },
  { value: 'ng', label: 'Angular', group: 'Google' },
  { value: 'lit', label: 'Lit', group: 'Google' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue', group: 'Evan' },
];

const stringData = ['React', 'Angular', 'Svelte', 'Vue'];
const longData = [
  'Item that is so long that it can produce overflow',
  'Another item that is so long that it can produce overflow',
  'Even longer item that is so long that it can produce overflow',
];

const largeData = Array(1000)
  .fill(0)
  .map((_, index) => ({
    value: `${index}`,
    label: `Item ${index}`,
  }));

function Controlled() {
  const [value, setValue] = useState([]);
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <MultiSelect
        data={data}
        value={value}
        onChange={setValue}
        placeholder="Select items"
        nothingFound="Nothing found"
        searchable
      />
      <button type="button" onClick={() => setValue(['react', 'ng'])}>
        Set value
      </button>
    </div>
  );
}

function DynamicLabels() {
  const [value, setValue] = useState([]);
  const [dynamicData, setDynamicData] = useState(data);

  useEffect(() => {
    const interval = setInterval(() => {
      setDynamicData(
        data.map((d) => ({
          value: d.value,
          label: `${d.label}-${Math.floor(Math.random() * 100)}`,
        }))
      );
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <MultiSelect
        data={dynamicData}
        value={value}
        onChange={setValue}
        placeholder="Select items"
        nothingFound="Nothing found"
        searchable
      />
      <button type="button" onClick={() => setValue(['react', 'ng'])}>
        Set value
      </button>
    </div>
  );
}

const sizes = PATTERN_SIZES.map((size) => (
  <Group grow key={size} style={{ marginTop: 30 }} direction="column">
    <MultiSelect
      size={size}
      variant="unstyled"
      data={data}
      defaultValue={['react', 'ng']}
      placeholder="Select items"
      nothingFound="Nothing found"
    />
    <TextInput placeholder="Text input" size={size} />
  </Group>
));

const variants = (['default', 'filled', 'unstyled'] as const).map((variant) => (
  <Group grow key={variant} style={{ marginTop: 30 }} direction="column">
    <MultiSelect
      variant={variant}
      data={data}
      placeholder="Select items"
      nothingFound="Nothing found"
    />
    <TextInput placeholder="Text input" variant={variant} />
  </Group>
));

storiesOf('MultiSelect', module)
  .add('Alignment', () => (
    <>
      <Group style={{ padding: 40, paddingBottom: 0 }} grow align="flex-start">
        <MultiSelect
          data={data}
          defaultValue={['react', 'ng']}
          placeholder="Select items"
          nothingFound="Nothing found"
        />
        <TextInput placeholder="Select items" />
      </Group>
      <Group style={{ padding: 40, paddingTop: 0 }} grow align="flex-start" mt="md">
        <TextInput placeholder="Select items" />
        <MultiSelect
          data={[...data, { label: 'Lit', value: 'lit', disabled: true }]}
          defaultValue={['react', 'ng']}
          placeholder="Select items"
          nothingFound="Nothing found"
        />
      </Group>
    </>
  ))
  .add('Overflow value and items', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <MultiSelect data={longData} placeholder="Select items" searchable />
    </div>
  ))
  .add('z-index', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <MultiSelect data={data} placeholder="Select items" searchable />
      <SegmentedControl data={data} />
    </div>
  ))
  .add('Grouped and disabled data', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <MultiSelect
        data={groupedData}
        placeholder="Select items"
        nothingFound="Nothing found"
        searchable
      />
    </div>
  ))
  .add('String data', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <MultiSelect
        data={stringData}
        placeholder="Select items"
        nothingFound="Nothing found"
        searchable
      />
    </div>
  ))
  .add('Large data', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <MultiSelect
        data={largeData}
        limit={20}
        placeholder="Select items"
        nothingFound="Nothing found"
        searchable
      />
    </div>
  ))
  .add('Controlled', () => <Controlled />)
  .add('Dynamic Labels', () => <DynamicLabels />)
  .add('Searchable', () => (
    <Group style={{ padding: 40, paddingBottom: 0 }} grow align="flex-start">
      <MultiSelect
        data={data}
        defaultValue={['react', 'ng']}
        placeholder="Select items"
        nothingFound="Nothing found"
        searchable
      />
      <MultiSelect
        data={[...data, { label: 'Lit', value: 'lit', disabled: true }]}
        defaultValue={['react', 'ng']}
        placeholder="Select items"
        nothingFound="Nothing found"
        searchable
      />
    </Group>
  ))
  .add('Clearable', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <MultiSelect
        data={data}
        defaultValue={['react', 'ng']}
        placeholder="Select items"
        nothingFound="Nothing found"
        searchable
        clearable
      />
      <MultiSelect
        data={data}
        defaultValue={['react', 'ng']}
        placeholder="Select items"
        nothingFound="Nothing found"
        clearable
      />
      <MultiSelect
        data={data}
        defaultValue={['react', 'ng']}
        placeholder="Select items"
        nothingFound="Nothing found"
        clearable
        disabled
      />
    </div>
  ))
  .add('Sizes', () => <div style={{ padding: 40 }}>{sizes}</div>)
  .add('Variants', () => <div style={{ padding: 40 }}>{variants}</div>)
  .add('Max Selected Values', () => (
    <Group style={{ padding: 40, paddingBottom: 0 }} grow align="flex-start">
      <MultiSelect
        data={data}
        defaultValue={['react', 'ng']}
        placeholder="Select items"
        nothingFound="Nothing found"
        searchable
        clearable
        maxSelectedValues={5}
      />
      <MultiSelect
        data={data}
        defaultValue={['react', 'ng']}
        placeholder="Select items"
        nothingFound="Nothing found"
        maxSelectedValues={5}
      />
    </Group>
  ))
  .add('Within overlays', () => (
    <WithinOverlays>
      <MultiSelect
        data={data}
        defaultValue={['react', 'ng']}
        placeholder="Select items"
        withinPortal={false}
      />
    </WithinOverlays>
  ))
  .add('Within form', () => (
    <SubmitForm>
      <MultiSelect
        data={data}
        defaultValue={['react', 'ng']}
        placeholder="Select items"
        searchable
        name="test"
      />
    </SubmitForm>
  ))
  .add('Default props on PatternProvider', () => (
    <PatternProvider defaultProps={{ MultiSelect: { radius: 0, label: 'Default label' } }}>
      <MultiSelect data={data} placeholder="Select items" />
    </PatternProvider>
  ))
  .add('Clearable button not in tab index', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <MultiSelect
        data={data}
        defaultValue={['react', 'ng']}
        placeholder="Select items"
        nothingFound="Nothing found"
        searchable
        clearable
        clearButtonTabIndex={-1}
      />
      <MultiSelect
        data={data}
        defaultValue={['react', 'ng']}
        placeholder="Select items"
        nothingFound="Nothing found"
      />
    </div>
  ));
