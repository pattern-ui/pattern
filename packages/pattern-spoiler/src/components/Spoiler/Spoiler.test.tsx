import React from 'react';
import { checkAccessibility, itRendersChildren, itSupportsSystemProps } from '@pattern-ui/tests';
import { Spoiler, SpoilerProps } from './Spoiler';

const defaultProps: SpoilerProps = {
  maxHeight: 100,
  showLabel: 'show',
  hideLabel: 'hide',
  children: 'test-children',
};

describe('@pattern-ui/core/Spoiler', () => {
  checkAccessibility([<Spoiler {...defaultProps} />]);
  itRendersChildren(Spoiler, defaultProps);
  itSupportsSystemProps({
    component: Spoiler,
    props: defaultProps,
    displayName: '@pattern-ui/core/Spoiler',
    refType: HTMLDivElement,
  });
});
