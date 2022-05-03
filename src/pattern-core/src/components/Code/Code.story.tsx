import React from 'react';
import { storiesOf } from '@storybook/react';
import { PatternProvider } from '@pattern/styles';
import { Code } from './Code';

storiesOf('Code', module).add('Default props on PatternProvider', () => (
  <PatternProvider defaultProps={{ Code: { color: 'red' } }}>
    <Code>Default props</Code>
  </PatternProvider>
));
