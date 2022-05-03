import React from 'react';
import { Slider, RangeSlider } from '@pattern/core';

const code = `
import { Slider, RangeSlider } from '@pattern/core';

const marks = [
  { value: 20, label: '20%' },
  { value: 50, label: '50%' },
  { value: 80, label: '80%' },
];

function Demo() {
  return (
    <>
      <Slider defaultValue={40} marks={[{ value: 10 }, { value: 40 }, { value: 95 }]} />
      <Slider defaultValue={40} marks={marks} />
      <RangeSlider defaultValue={[20, 80]} marks={marks} />
    </>
  );
}
`;

function Demo() {
  const marks = [
    { value: 20, label: '20%' },
    { value: 50, label: '50%' },
    { value: 80, label: '80%' },
  ];

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <div style={{ paddingBottom: 30 }}>
        <Slider defaultValue={40} marks={[{ value: 10 }, { value: 40 }, { value: 95 }]} />
      </div>
      <div style={{ paddingBottom: 30 }}>
        <Slider defaultValue={40} marks={marks} />
      </div>
      <div style={{ paddingBottom: 25 }}>
        <RangeSlider defaultValue={[20, 80]} marks={marks} />
      </div>
    </div>
  );
}

export const marks: PatternDemo = {
  type: 'demo',
  component: Demo,
  code,
};
