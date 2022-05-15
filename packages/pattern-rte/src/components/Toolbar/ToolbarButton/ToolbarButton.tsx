import React from 'react';
import { ActionIcon, ActionIconProps } from '@pattern-ui/action-icon';
import useStyles from './ToolbarButton.styles';

interface ToolbarButtonProps extends ActionIconProps<'button'> {
  /** Control icon */
  children: React.ReactNode;

  /** Quill specific control */
  controls: string;

  /** Value for quill control */
  value?: string;

  /** Disable active styles */
  noActive?: boolean;
}

export function ToolbarButton({
  className,
  children,
  controls,
  value,
  noActive,
  ...others
}: ToolbarButtonProps) {
  const { classes, cx } = useStyles({ noActive }, { name: 'RichTextEditor' });

  return (
    <ActionIcon
      className={cx(classes.control, `ql-${controls}`, className)}
      value={value}
      radius={0}
      {...others}
    >
      {children}
    </ActionIcon>
  );
}

ToolbarButton.displayName = '@pattern-ui/rte/ToolbarButton';
