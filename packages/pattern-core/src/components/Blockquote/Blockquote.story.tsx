import React from 'react';
import { storiesOf } from '@storybook/react';
import { PatternProvider } from '@pattern-ui/styles';
import { StylesAPIStory } from '@pattern-ui/storybook';
import { Blockquote } from './Blockquote';

storiesOf('Blockquote', module)
  .add('Styles API', () => (
    <StylesAPIStory
      component={Blockquote}
      name="Blockquote"
      props={{ children: 'Blockquote', cite: 'cite' }}
    />
  ))
  .add('Default props on PatternProvider', () => (
    <PatternProvider defaultProps={{ Blockquote: { color: 'orange' } }}>
      <Blockquote cite="– Cite">Hello there</Blockquote>
    </PatternProvider>
  ));
