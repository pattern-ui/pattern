import React from 'react';
import { Grid } from '@pattern/core';
import { ColWrapper as Col } from './_col-wrapper';

function Demo() {
  return (
    <Grid>
      <Col span={3}>1</Col>
      <Col span={3}>2</Col>
      <Col span={3} offset={3}>
        3
      </Col>
    </Grid>
  );
}

export const offset: PatternDemo = {
  type: 'demo',
  component: Demo,
};
