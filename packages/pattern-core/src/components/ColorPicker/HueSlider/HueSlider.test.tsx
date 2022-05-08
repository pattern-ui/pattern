import React from 'react';
import { checkAccessibility, itSupportsSystemProps } from '@pattern-ui/tests';
import { HueSlider, HueSliderProps } from './HueSlider';

const defaultProps: HueSliderProps = {
  value: 150,
  onChange: () => {},
  size: 'sm',
};

describe('@pattern-ui/core/HueSlider', () => {
  checkAccessibility([<HueSlider {...defaultProps} aria-label="test-label" />]);
  itSupportsSystemProps({
    component: HueSlider,
    props: defaultProps,
    displayName: '@pattern-ui/core/HueSlider',
    refType: HTMLDivElement,
  });
});
