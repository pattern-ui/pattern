import React, { cloneElement } from 'react';
import { isElement } from '@pattern-ui/utils';
import { useMergedRef } from '@pattern-ui/hooks';
import { getDefaultZIndex, usePatternDefaultProps } from '@pattern-ui/styles';
import { Box } from '@pattern-ui/box';
import { OptionalPortal } from '@pattern-ui/portal';
import { TooltipBaseProps } from '../Tooltip.types';
import useStyles from '../Tooltip.styles';
import { TOOLTIP_ERRORS } from '../Tooltip.errors';
import { useFloatingTooltip } from './use-floating-tooltip';

export interface TooltipFloatingProps extends TooltipBaseProps {
  /** Offset from mouse in px */
  offset?: number;
}

const defaultProps: Partial<TooltipFloatingProps> = {
  refProp: 'ref',
  withinPortal: true,
  offset: 10,
  position: 'right',
  zIndex: getDefaultZIndex('popover'),
};

export function TooltipFloating(props: TooltipFloatingProps) {
  const {
    children,
    refProp,
    withinPortal,
    style,
    className,
    classNames,
    styles,
    unstyled,
    radius,
    color,
    label,
    offset,
    position,
    multiline,
    width,
    zIndex,
    disabled,
    ...others
  } = usePatternDefaultProps('TooltipFloating', defaultProps, props);

  const { handleMouseMove, x, y, opened, boundaryRef, floating, setOpened } = useFloatingTooltip({
    offset,
    position,
  });

  const { classes, cx } = useStyles(
    { radius, color, multiline, width },
    { name: 'Tooltip', classNames, styles, unstyled }
  );

  if (!isElement(children)) {
    throw new Error(TOOLTIP_ERRORS['tooltip-children']);
  }

  const target = children as React.ReactElement;
  const targetRef = useMergedRef(boundaryRef, (target as any).ref);

  const onMouseEnter = (event: React.MouseEvent<unknown, MouseEvent>) => {
    target.props.onMouseEnter?.(event);
    handleMouseMove(event);
    setOpened(true);
  };

  const onMouseLeave = (event: React.MouseEvent<unknown, MouseEvent>) => {
    target.props.onMouseLeave?.(event);
    setOpened(false);
  };

  return (
    <>
      <OptionalPortal withinPortal={withinPortal}>
        <Box
          {...others}
          ref={floating}
          className={cx(classes.root, className)}
          style={{
            ...style,
            zIndex,
            display: opened && !disabled ? 'block' : 'none',
            top: y ?? '',
            left: Math.round(x) ?? '',
          }}
        >
          {label}
        </Box>
      </OptionalPortal>

      {cloneElement(target, {
        ...target.props,
        [refProp]: targetRef,
        onMouseEnter,
        onMouseLeave,
      })}
    </>
  );
}

TooltipFloating.displayName = '@pattern-ui/core/TooltipFloating';
