import React from 'react';
import { checkAccessibility, itSupportsSystemProps } from '@pattern-ui/tests';
import { AlphaSlider, AlphaSliderProps } from './AlphaSlider';

const defaultProps: AlphaSliderProps = {
  value: 0.5,
  onChange: () => {},
  color: '#FF00FF',
  size: 'sm',
};

describe('@pattern-ui/core/AlphaSlider', () => {
  checkAccessibility([<AlphaSlider {...defaultProps} aria-label="test-label" />]);
  itSupportsSystemProps({
    component: AlphaSlider,
    props: defaultProps,
    displayName: '@pattern-ui/core/AlphaSlider',
    refType: HTMLDivElement,
  });
});
