import React from 'react';
import { checkAccessibility, itSupportsSystemProps } from '@pattern/tests';
import { HueSlider, HueSliderProps } from './HueSlider';

const defaultProps: HueSliderProps = {
  value: 150,
  onChange: () => {},
  size: 'sm',
};

describe('@pattern/core/HueSlider', () => {
  checkAccessibility([<HueSlider {...defaultProps} aria-label="test-label" />]);
  itSupportsSystemProps({
    component: HueSlider,
    props: defaultProps,
    displayName: '@pattern/core/HueSlider',
    refType: HTMLDivElement,
  });
});
