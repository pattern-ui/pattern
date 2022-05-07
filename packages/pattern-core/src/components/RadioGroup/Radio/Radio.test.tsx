import React from 'react';
import { checkAccessibility, itConnectsLabelAndInput, itSupportsSystemProps } from '@pattern-ui/tests';
import { Radio, RadioProps } from './Radio';

const defaultProps: RadioProps = {
  value: 'test-radio',
  label: 'test-radio-label',
};

describe('@pattern-ui/core/Radio', () => {
  itConnectsLabelAndInput(Radio, defaultProps);
  checkAccessibility([<Radio {...defaultProps} />]);
  itSupportsSystemProps({
    component: Radio,
    props: defaultProps,
    displayName: '@pattern-ui/core/Radio',
    refType: HTMLInputElement,
    excludeOthers: true,
  });
});
