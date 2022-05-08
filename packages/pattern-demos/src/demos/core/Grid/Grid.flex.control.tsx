import React from 'react';
import { Grid, GridProps } from '@pattern-ui/core';
import { ColWrapper as Col } from './_col-wrapper';

function Wrapper(props: GridProps) {
  return (
    <Grid {...props} id="grid-configurator">
      <Col span={3} style={{ minHeight: 80 }}>
        1
      </Col>
      <Col span={3} style={{ minHeight: 120 }}>
        2
      </Col>
      <Col span={3}>3</Col>
    </Grid>
  );
}

const codeTemplate = (props: string) => `
import { Grid } from '@pattern-ui/core';

export default function Demo() {
  return (
    <Grid${props}>
      <Grid.Col span={3} style={{ minHeight: 80 }}>1</Grid.Col>
      <Grid.Col span={3} style={{ minHeight: 120 }}>2</Grid.Col>
      <Grid.Col span={3}>3</Grid.Col>
    </Grid>
  );
}
`;

export const flexControl: PatternControlDemo = {
  type: 'control',
  component: Wrapper,
  codeTemplate,
  controls: [
    {
      name: 'justify',
      type: 'select',
      initialValue: 'flex-start',
      defaultValue: 'flex-start',
      data: [
        { label: 'flex-start', value: 'flex-start' },
        { label: 'flex-end', value: 'flex-end' },
        { label: 'center', value: 'center' },
        { label: 'space-between', value: 'space-between' },
        { label: 'space-around', value: 'space-around' },
      ],
    },
    {
      name: 'align',
      type: 'select',
      initialValue: 'stretch',
      defaultValue: 'stretch',
      data: [
        { label: 'flex-start', value: 'flex-start' },
        { label: 'flex-end', value: 'flex-end' },
        { label: 'center', value: 'center' },
        { label: 'stretch', value: 'stretch' },
      ],
    },
  ],
};
