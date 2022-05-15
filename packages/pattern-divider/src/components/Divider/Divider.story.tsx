import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME, PatternProvider } from '@pattern-ui/styles';
import { Divider } from './Divider';

const getColors = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <Divider key={color} color={color} style={{ marginTop: 15 }} {...props} />
  ));

storiesOf('Divider', module)
  .add('Colors', () => <div style={{ padding: 20 }}>{getColors()}</div>)
  .add('Vertical', () => (
    <div style={{ padding: 20, height: 200 }}>
      <Divider orientation="vertical" />
    </div>
  ))
  .add('Default props on PatternProvider', () => (
    <PatternProvider defaultProps={{ Divider: { color: 'red' } }}>
      <Divider />
    </PatternProvider>
  ))
  .add('Label props', () => (
    <Divider
      labelPosition="center"
      label="test label"
      color="blue"
      size="xs"
      labelProps={{ color: 'pink', size: 'xl' }}
    />
  ));
