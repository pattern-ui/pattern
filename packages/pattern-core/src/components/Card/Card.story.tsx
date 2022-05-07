import React from 'react';
import { storiesOf } from '@storybook/react';
import { PatternProvider } from '@pattern-ui/styles';
import { Card } from './Card';

storiesOf('Card', module)
  .add('Default props on PatternProvider', () => (
    <PatternProvider defaultProps={{ Card: { shadow: 'xl', padding: 0, withBorder: true } }}>
      <Card sx={{ maxWidth: 400 }} mx="auto" my={50}>
        Default props card
      </Card>
    </PatternProvider>
  ))
  .add('Default radius on PatternProvider', () => (
    <PatternProvider theme={{ defaultRadius: 'xl' }}>
      <Card sx={{ maxWidth: 400 }} mx="auto" my={50} withBorder>
        Default radius card
      </Card>
    </PatternProvider>
  ));
