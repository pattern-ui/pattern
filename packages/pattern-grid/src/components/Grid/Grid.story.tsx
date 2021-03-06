import React from 'react';
import { storiesOf } from '@storybook/react';
import { PatternProvider } from '@pattern-ui/styles';
import { Grid } from './Grid';

storiesOf('Grid', module)
  .add('Default props on PatternProvider', () => (
    <PatternProvider defaultProps={{ Grid: { columns: 24 } }}>
      <Grid>
        <Grid.Col span={12} sx={{ background: 'blue' }}>
          12 col
        </Grid.Col>
        <Grid.Col span={6} sx={{ background: 'red' }}>
          6 col
        </Grid.Col>
        <Grid.Col span={6} sx={{ background: 'green' }}>
          6 col
        </Grid.Col>
      </Grid>
    </PatternProvider>
  ))
  .add('Without span', () => (
    <Grid gutter="xs" columns={2}>
      <Grid.Col sm={1} sx={{ backgroundColor: 'red' }}>
        Col 1
      </Grid.Col>
      <Grid.Col sm={1} sx={{ backgroundColor: 'blue' }}>
        Col 2
      </Grid.Col>
    </Grid>
  ));
