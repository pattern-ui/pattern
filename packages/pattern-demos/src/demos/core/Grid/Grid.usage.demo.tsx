import React from 'react';
import { Grid } from '@pattern/core';
import { ColWrapper as Col } from './_col-wrapper';

function Demo() {
  return (
    <Grid>
      <Col span={4}>1</Col>
      <Col span={4}>2</Col>
      <Col span={4}>3</Col>
    </Grid>
  );
}

export const usage: PatternDemo = {
  type: 'demo',
  component: Demo,
};
