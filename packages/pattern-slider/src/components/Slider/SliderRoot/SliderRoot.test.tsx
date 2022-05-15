import React from 'react';
import { itSupportsSystemProps } from '@pattern-ui/tests';
import { SliderRoot, SliderRootProps } from './SliderRoot';

const defaultProps: SliderRootProps = {
  size: 10,
  children: <div />,
  disabled: false,
};

describe('@pattern-ui/core/SliderRoot', () => {
  itSupportsSystemProps({
    component: SliderRoot,
    props: defaultProps,
    displayName: '@pattern-ui/core/SliderRoot',
    refType: HTMLDivElement,
  });
});
