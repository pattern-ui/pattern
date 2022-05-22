import React, { useState } from 'react';
import {
  NumberInput,
  Slider,
  InputWrapper,
  RangeSlider,
  Switch,
  Checkbox,
  SegmentedControl,
  SegmentedControlProps,
  RadioGroup,
  Radio,
  Autocomplete,
  ColorInput,
  createStyles,
  Paper,
} from '@pattern-ui/core';
import { CustomSelectDemo, CountriesSelect } from '@pattern-ui/demos';
import { DatePicker, DateRangePicker } from '@pattern-ui/dates';

const BREAKPOINT = '@media (max-width: 960px)';

const useStyles = createStyles({
  wrapper: {
    display: 'flex',
    paddingBottom: 50,

    [BREAKPOINT]: {
      flexDirection: 'column',
    },
  },

  column: {
    flex: 1,
    maxWidth: '50%',

    '&:first-of-type': {
      paddingRight: 10,
    },

    '&:last-of-type': {
      paddingLeft: 10,
    },

    [BREAKPOINT]: {
      maxWidth: '100%',

      '&:first-of-type': {
        paddingRight: 0,
      },

      '&:last-of-type': {
        paddingLeft: 0,
      },
      '& + &': {
        marginTop: 20,
      },
    },
  },
});

const data = [
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'ng' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
];

export function SegmentedControlWrapper(
  props: Omit<SegmentedControlProps, 'value' | 'onChange' | 'data'>
) {
  const [value, onChange] = useState('react');
  return <SegmentedControl {...props} data={data} value={value} onChange={onChange} />;
}

export function InputsDemo() {
  const { classes } = useStyles();

  return (
    <Paper className={classes.wrapper} shadow="md" p={30} radius="md">
      <div className={classes.column}>
        <DatePicker
          placeholder="Pick a date"
          required
          defaultValue={new Date()}
          inputFormat="MMMM D, YYYY"
        />

        <DateRangePicker placeholder="Pick dates range" mt="md" />

        <CountriesSelect mt="md" defaultValue={[]} styles={{ dropdown: { zIndex: 5 } }} />

        <RadioGroup mt="md" defaultValue="react">
          <Radio value="react" />
          <Radio value="svelte" />
          <Radio value="vue" />
        </RadioGroup>

        <Checkbox mt={20} defaultChecked />

        <Switch mt="md" defaultChecked />
      </div>

      <div className={classes.column}>
        <div style={{ position: 'relative', zIndex: 3 }}>
          <CustomSelectDemo />
        </div>

        <Autocomplete
          placeholder="Your favorite library/framework"
          styles={{ dropdown: { zIndex: 4 } }}
          mt="md"
          data={[{ value: 'React' }, { value: 'Angular' }, { value: 'Svelte' }, { value: 'Vue' }]}
        />

        <NumberInput defaultValue={18} mt="md" />

        <ColorInput defaultValue="rgba(97, 168, 255, 0.88)" format="rgba" mt="md" />

        <InputWrapper labelElement="div" mt="md">
          <Slider defaultValue={40} mt="xs" />
          <RangeSlider
            mt={10}
            step={25}
            defaultValue={[25, 75]}
            minRange={25}
            marks={[
              { value: 0, label: 'xs' },
              { value: 25, label: 'sm' },
              { value: 50, label: 'md' },
              { value: 75, label: 'lg' },
              { value: 100, label: 'xl' },
            ]}
          />
        </InputWrapper>
      </div>
    </Paper>
  );
}
