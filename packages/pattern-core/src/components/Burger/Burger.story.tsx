import React from 'react';
import { storiesOf } from '@storybook/react';
import { PatternProvider } from '@pattern/styles';
import { Burger } from './Burger';

storiesOf('Burger', module).add('Default props on PatternProvider', () => (
  <PatternProvider defaultProps={{ Burger: { color: 'red' } }}>
    <Burger opened={false} />
  </PatternProvider>
));
