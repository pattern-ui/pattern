import React, { useState } from 'react';
import dayjs from 'dayjs';
import { storiesOf } from '@storybook/react';
import { PATTERN_SIZES } from '@pattern-ui/styles';
import { TimeRangeInput } from './TimeRangeInput';

const sizes = PATTERN_SIZES.map((size) => (
  <TimeRangeInput size={size} key={size} style={{ marginTop: 30 }} />
));

function Controlled() {
  const [value, setValue] = useState([new Date(), new Date()]);

  return (
    <>
      <TimeRangeInput value={[value[0], value[1]]} onChange={setValue} withSeconds />
      <button
        type="button"
        onClick={() =>
          setValue([
            dayjs(new Date()).add(15, 'minutes').toDate(),
            dayjs(new Date()).add(30, 'minutes').toDate(),
          ])
        }
      >
        Set value
      </button>
    </>
  );
}

storiesOf('TimeRangeInput', module)
  .add('Controlled', () => (
    <div style={{ width: 400, padding: 40 }}>
      <Controlled />
    </div>
  ))
  .add('Sizes', () => <div style={{ width: 400, padding: 40 }}>{sizes}</div>);
