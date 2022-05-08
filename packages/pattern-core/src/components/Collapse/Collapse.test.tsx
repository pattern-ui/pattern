import React from 'react';
import { itRendersChildren, itSupportsSystemProps } from '@pattern-ui/tests';
import { Collapse, CollapseProps } from './Collapse';

const defaultProps: CollapseProps = {
  in: true,
  children: <div style={{ height: '300px' }} />,
};

describe('@pattern-ui/core/Collapse', () => {
  itRendersChildren(Collapse, defaultProps);
  itSupportsSystemProps({
    component: Collapse,
    props: defaultProps,
    displayName: '@pattern-ui/core/Collapse',
  });
});
