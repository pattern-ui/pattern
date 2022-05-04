import React from 'react';
import { storiesOf } from '@storybook/react';
import { StylesAPIStory } from '@pattern/storybook';
import { PatternProvider } from '@pattern/styles';
import { Avatar } from './Avatar';

storiesOf('Avatar', module)
  .add('Styles API', () => <StylesAPIStory name="Avatar" component={Avatar} props={{}} />)
  .add('Default props on PatternProvider', () => (
    <PatternProvider defaultProps={{ Avatar: { color: 'cyan' } }}>
      <Avatar>MJ</Avatar>
    </PatternProvider>
  ))
  .add('Default radius on PatternProvider', () => (
    <PatternProvider theme={{ defaultRadius: 0 }}>
      <Avatar>MJ</Avatar>
    </PatternProvider>
  ));
