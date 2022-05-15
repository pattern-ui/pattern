import React, { forwardRef } from 'react';
import { DefaultProps, PatternNumberSize, usePatternDefaultProps } from '@pattern-ui/styles';
import { filterFalsyChildren } from '@pattern-ui/utils';
import { Box } from '@pattern-ui/box';
import useStyles, { GroupPosition } from './Group.styles';

export interface GroupProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Defines justify-content property */
  position?: GroupPosition;

  /** Defined flex-wrap property */
  noWrap?: boolean;

  /** Defines flex-grow property for each element, true -> 1, false -> 0 */
  grow?: boolean;

  /** Space between elements */
  spacing?: PatternNumberSize;

  /** Defines flex-direction property, row for horizontal, column for vertical */
  direction?: 'row' | 'column';

  /** Defines align-items css property */
  align?: React.CSSProperties['alignItems'];
}

const defaultProps: Partial<GroupProps> = {
  position: 'left',
  spacing: 'md',
  direction: 'row',
};

export const Group = forwardRef<HTMLDivElement, GroupProps>((props: GroupProps, ref) => {
  const {
    className,
    position,
    align,
    children,
    noWrap,
    grow,
    spacing,
    direction,
    classNames,
    styles,
    ...others
  } = usePatternDefaultProps('Group', defaultProps, props);

  const filteredChildren = filterFalsyChildren(children);
  const { classes, cx } = useStyles(
    {
      align,
      grow,
      noWrap,
      spacing,
      position,
      direction,
      count: filteredChildren.length,
    },
    { classNames, styles, name: 'Group' }
  );

  const items = filteredChildren.map((child) => {
    if (typeof child === 'object' && child !== null && 'props' in child) {
      return React.cloneElement(child, {
        className: cx(classes.child, child.props?.className),
      });
    }

    return child;
  });

  return (
    <Box className={cx(classes.root, className)} ref={ref} {...others}>
      {items}
    </Box>
  );
});

Group.displayName = '@pattern-ui/core/Group';
