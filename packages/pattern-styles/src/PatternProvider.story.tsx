import React from 'react';
import { storiesOf } from '@storybook/react';
import { PatternProvider, usePatternDefaultProps } from './theme';
import { createStyles, Global } from './tss';

const useStyles = createStyles((theme) => ({
  element: {
    color: theme.colors[theme.primaryColor][5],
    fontSize: theme.fontSizes.sm,
    backgroundColor: theme.colorScheme === 'dark' ? 'white' : 'black',
    paddingLeft: 100,
  },
}));

function TestElement() {
  const { classes } = useStyles(null, { name: 'TestElement' });
  const { children } = usePatternDefaultProps(
    'TestElement',
    { children: 'Not default' },
    {}
  ) as any;
  return <div className={classes.element}>{children}</div>;
}

storiesOf('Styles', module)
  .add('Inheritance: theme', () => (
    <PatternProvider
      inherit
      theme={{ primaryColor: 'orange', colorScheme: 'light' }}
      styles={{ TestElement: { element: { fontSize: 50 } } }}
      defaultProps={{ TestElement: { children: 'Default test element' } }}
      withCSSVariables
    >
      <TestElement />

      <PatternProvider theme={{ primaryColor: 'red' }} inherit>
        <TestElement />
      </PatternProvider>
    </PatternProvider>
  ))
  .add('ClassNames', () => (
    <PatternProvider
      defaultProps={{ TestElement: { children: 'Default test element' } }}
      classNames={{
        TestElement: {
          element: 'test-class',
        },
      }}
    >
      <Global
        styles={{
          '.test-class': {
            border: '1px solid orange',
          },
        }}
      />
      <TestElement />
      <TestElement />
    </PatternProvider>
  ));
