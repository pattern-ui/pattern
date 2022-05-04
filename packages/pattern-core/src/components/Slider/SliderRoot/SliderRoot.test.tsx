import React from 'react';
import { itSupportsSystemProps } from '@pattern/tests';
import { SliderRoot, SliderRootProps } from './SliderRoot';

const defaultProps: SliderRootProps = {
  size: 10,
  children: <div />,
  disabled: false,
};

describe('@pattern/core/SliderRoot', () => {
  itSupportsSystemProps({
    component: SliderRoot,
    props: defaultProps,
    displayName: '@pattern/core/SliderRoot',
    refType: HTMLDivElement,
  });
});
