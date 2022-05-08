import React from 'react';
import { Slider, Text } from '@pattern-ui/core';

export default function Demo() {
  const MARKS = [
    { value: 0, label: 'xs' },
    { value: 25, label: 'sm' },
    { value: 50, label: 'md' },
    { value: 75, label: 'lg' },
    { value: 100, label: 'xl' },
  ];

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <Text>Decimal step</Text>
      <Slider
        defaultValue={0}
        min={-10}
        max={10}
        label={(value) => value.toFixed(1)}
        step={0.1}
        styles={{ markLabel: { display: 'none' } }}
      />

      <Text style={{ marginTop: 15 }}>Step matched with marks</Text>
      <div style={{ paddingLeft: 4, paddingRight: 4 }}>
        <Slider
          defaultValue={50}
          label={(val) => MARKS.find((mark) => mark.value === val).label}
          step={25}
          marks={MARKS}
          styles={{ markLabel: { display: 'none' } }}
        />
      </div>
    </div>
  );
}
