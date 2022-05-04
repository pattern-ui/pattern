import React from 'react';
import { checkAccessibility, itConnectsLabelAndInput, itSupportsSystemProps } from '@pattern/tests';
import { Radio, RadioProps } from './Radio';

const defaultProps: RadioProps = {
  value: 'test-radio',
  label: 'test-radio-label',
};

describe('@pattern/core/Radio', () => {
  itConnectsLabelAndInput(Radio, defaultProps);
  checkAccessibility([<Radio {...defaultProps} />]);
  itSupportsSystemProps({
    component: Radio,
    props: defaultProps,
    displayName: '@pattern/core/Radio',
    refType: HTMLInputElement,
    excludeOthers: true,
  });
});
