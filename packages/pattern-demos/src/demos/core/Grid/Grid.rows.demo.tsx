import React from 'react';
import { Grid } from '@pattern/core';
import { ColWrapper as Col } from './_col-wrapper';

export default function Demo() {
  return (
    <Grid>
      <Col span={4}>1</Col>
      <Col span={4}>2</Col>
      <Col span={4}>3</Col>
      <Col span={4}>4</Col>
    </Grid>
  );
}
