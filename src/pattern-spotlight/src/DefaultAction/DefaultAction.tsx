import React from 'react';
import {
  DefaultProps,
  Selectors,
  Highlight,
  UnstyledButton,
  Group,
  Center,
  Text,
  PatternNumberSize,
  PatternColor,
} from '@pattern/core';
import type { SpotlightAction } from '../types';
import useStyles from './DefaultAction.styles';

export type DefaultActionStylesNames = Selectors<typeof useStyles>;

export interface DefaultActionProps
  extends DefaultProps<DefaultActionStylesNames>,
    React.ComponentPropsWithoutRef<'button'> {
  action: SpotlightAction;
  hovered: boolean;
  onTrigger(): void;
  highlightQuery: boolean;
  highlightColor: PatternColor;
  query: string;
  radius: PatternNumberSize;
}

export function DefaultAction({
  action,
  styles,
  classNames,
  hovered,
  onTrigger,
  highlightQuery,
  highlightColor,
  query,
  radius,
  ...others
}: DefaultActionProps) {
  const { classes, cx } = useStyles({ radius }, { styles, classNames, name: 'Spotlight' });

  return (
    <UnstyledButton
      className={cx(classes.action, { [classes.actionHovered]: hovered })}
      tabIndex={-1}
      onMouseDown={(event) => event.preventDefault()}
      onClick={onTrigger}
      {...others}
    >
      <Group noWrap>
        {action.icon && <Center className={classes.actionIcon}>{action.icon}</Center>}

        <div className={classes.actionBody}>
          <Highlight highlightColor={highlightColor} highlight={highlightQuery ? query : null}>
            {action.title}
          </Highlight>

          {action.description && (
            <Text color="dimmed" size="xs">
              {action.description}
            </Text>
          )}
        </div>
      </Group>
    </UnstyledButton>
  );
}

DefaultAction.displayName = '@pattern/spotlight/DefaultAction';
