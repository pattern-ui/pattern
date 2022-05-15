import React from 'react';
import { storiesOf } from '@storybook/react';
import { StylesAPIStory } from '@pattern-ui/storybook';
import { PatternProvider } from '@pattern-ui/styles';
import { Badge } from './Badge';

storiesOf('Badge', module)
  .add('Styles API', () => (
    <StylesAPIStory
      name="Badge"
      component={Badge}
      props={{ children: 'Badge', rightSection: '$', leftSection: '$' }}
    />
  ))
  .add('Default props on PatternProvider', () => (
    <PatternProvider defaultProps={{ Badge: { color: 'red', variant: 'filled' } }}>
      <Badge>Default props badge</Badge>
    </PatternProvider>
  ))
  .add('Default radius on PatternProvider', () => (
    <PatternProvider theme={{ defaultRadius: 0 }}>
      <Badge>Default radius badge</Badge>
    </PatternProvider>
  ));
