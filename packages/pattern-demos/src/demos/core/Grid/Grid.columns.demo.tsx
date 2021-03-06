import React from 'react';
import { Grid } from '@pattern-ui/core';
import { ColWrapper as Col } from './_col-wrapper';

export default function Demo() {
  return (
    <Grid columns={24}>
      <Col span={12}>1</Col>
      <Col span={6}>2</Col>
      <Col span={6}>3</Col>
    </Grid>
  );
}
