/* eslint-disable no-console */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { useDisclosure } from '@pattern-ui/hooks';
import { PATTERN_SIZES, PatternProvider } from '@pattern-ui/styles';
import { WithinOverlays, SubmitForm } from '@pattern-ui/storybook';
import { Button } from '@pattern-ui/button';
import { Modal } from '@pattern-ui/modal';
import { TextInput } from '@pattern-ui/text-input';
import { DatePicker } from './DatePicker';

function Controlled() {
  const [value, onChange] = useState(new Date(2021, 7, 5));

  return (
    <DatePicker
      value={value}
      onChange={(val) => {
        console.log(val);
        onChange(val);
      }}
      placeholder="With month and year"
    />
  );
}

function ControlledFreeInput() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <DatePicker
        mt={20}
        mb={10}
        value={value}
        onChange={(val) => {
          console.log(val);
          onChange(val);
        }}
        placeholder="Controlled with free input"
        allowFreeInput
      />
      <button type="button" onClick={() => onChange(new Date())}>
        Set date
      </button>
    </>
  );
}

function WithinModal() {
  const [opened, handlers] = useDisclosure(false);
  return (
    <>
      <Button onClick={handlers.open}>Open Modal</Button>
      <Modal opened={opened} onClose={handlers.close} title="Modal with DatePicker">
        <DatePicker mt="md" id="dateOfBirth" placeholder="Date Of Birth" />
      </Modal>
    </>
  );
}

const sizes = PATTERN_SIZES.map((size) => (
  <DatePicker
    placeholder={`${size} placeholder`}
    size={size}
    key={size}
    style={{ marginTop: 30 }}
    defaultValue={new Date()}
  />
));

storiesOf('DatePicker', module)
  .add('Sizes', () => <div style={{ maxWidth: 400, padding: 40 }}>{sizes}</div>)
  .add('Hide week days', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePicker hideWeekdays />
    </div>
  ))
  .add('Hide outside dates', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePicker hideOutsideDates />
    </div>
  ))
  .add('Within modal', () => <WithinModal />)
  .add('Dropdown type modal', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePicker dropdownType="modal" placeholder="Pick date" modalZIndex={4554} />
    </div>
  ))
  .add('Amount of months', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePicker
        amountOfMonths={2}
        onDropdownClose={() => console.log('Close')}
        onDropdownOpen={() => console.log('open')}
      />
      <DatePicker amountOfMonths={3} />
    </div>
  ))
  .add('Controlled', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Controlled />
    </div>
  ))
  .add('Controlled with free input', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <ControlledFreeInput />
    </div>
  ))
  .add('Restricted input focus', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TextInput placeholder="Focus me when dropdown is opened" />
      <DatePicker placeholder="Pick date" mt="xl" />
    </div>
  ))
  .add('Free input focus', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePicker placeholder="Pick date" allowFreeInput />

      <DatePicker placeholder="Pick date" allowFreeInput mt={20} mb={40} />

      <button type="button">Focus test</button>

      <ControlledFreeInput />
    </div>
  ))
  .add('Date format on PatternProvider', () => (
    <PatternProvider theme={{ dateFormat: 'MM YYYY DD' }}>
      <DatePicker />
    </PatternProvider>
  ))
  .add('Within overlays', () => (
    <WithinOverlays>
      <DatePicker placeholder="Pick date" withinPortal={false} />
    </WithinOverlays>
  ))
  .add('Within form', () => (
    <SubmitForm>
      <DatePicker placeholder="Submit with enter" />
    </SubmitForm>
  ))
  .add('Within form: free input', () => (
    <SubmitForm>
      <DatePicker placeholder="Submit with enter with free input" allowFreeInput />
    </SubmitForm>
  ))
  .add('Clear button tab index disabled', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePicker placeholder="Submit with enter" clearButtonTabIndex={-1} />
    </div>
  ));
