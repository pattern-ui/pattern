import React from 'react';
import { storiesOf } from '@storybook/react';
import { PatternProvider } from '@pattern-ui/styles';
import { StylesAPIStory } from '@pattern-ui/storybook';
import { ActionIcon } from './ActionIcon';

storiesOf('ActionIcon', module)
  .add('Styles API', () => (
    <StylesAPIStory name="ActionIcon" component={ActionIcon} props={{ children: '$' }} />
  ))
  .add('Default radius on theme', () => (
    <PatternProvider theme={{ defaultRadius: 0 }}>
      <ActionIcon variant="filled" m={40} size="xl">
        $
      </ActionIcon>
    </PatternProvider>
  ))
  .add('Default props on PatternProvider', () => (
    <PatternProvider defaultProps={{ ActionIcon: { color: 'blue', radius: 'xl' } }}>
      <ActionIcon variant="filled" m={40} size="xl">
        $
      </ActionIcon>
    </PatternProvider>
  ));
