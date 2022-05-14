import React, { forwardRef } from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import {
  usePatternTheme,
  DefaultProps,
  Selectors,
  usePatternDefaultProps,
  PatternColor,
} from '@pattern-ui/styles';
import { useClipboard } from '@pattern-ui/hooks';
import { ScrollArea } from '@pattern-ui/scroll-area';
import { Box } from '@pattern-ui/box';
import { Tooltip } from '@pattern-ui/tooltip';
import { ActionIcon } from '@pattern-ui/action-icon';
import useStyles from './Prism.styles';
import { getPrismTheme } from './prism-theme';
import { CopyIcon } from './CopyIcon';

export type PrismStylesNames = Selectors<typeof useStyles>;

export interface PrismProps
  extends DefaultProps<PrismStylesNames>,
    Omit<React.ComponentPropsWithRef<'div'>, 'children'> {
  /** Code which will be highlighted */
  children: string;

  /** Programming language that should be highlighted */
  language: Language;

  /** True to remove copy to clipboard button */
  noCopy?: boolean;

  /** Copy button tooltip */
  copyLabel?: string;

  /** Copy button tooltip in copied state */
  copiedLabel?: string;

  /** Display line numbers */
  withLineNumbers?: boolean;

  /** Highlight line at given line number with color from theme.colors */
  highlightLines?: Record<string, { color: PatternColor; label?: string }>;

  /** Force color scheme, defaults to theme.colorScheme */
  colorScheme?: 'dark' | 'light';

  /** Change scroll area component */
  scrollAreaComponent?: any;

  /** Defines whether the code should be trimmed, defaults to true */
  trim?: boolean;
}

const prismDefaultProps: Partial<PrismProps> = {
  noCopy: false,
  copyLabel: 'Copy code',
  copiedLabel: 'Copied',
  withLineNumbers: false,
  trim: true,
  highlightLines: {},
  scrollAreaComponent: ScrollArea,
};

export const Prism = forwardRef<HTMLDivElement, PrismProps>((props: PrismProps, ref) => {
  const {
    className,
    children,
    language,
    noCopy,
    classNames,
    styles,
    copyLabel,
    copiedLabel,
    withLineNumbers,
    highlightLines,
    scrollAreaComponent: ScrollAreaComponent,
    colorScheme,
    trim,
    ...others
  } = usePatternDefaultProps('Prism', prismDefaultProps, props);
  const code = trim && typeof children === 'string' ? children.trim() : children;
  const maxLineSize = code.split('\n').length.toString().length;

  const theme = usePatternTheme();
  const clipboard = useClipboard();
  const { classes, cx } = useStyles(
    {
      colorScheme: colorScheme || theme.colorScheme,
      native: ScrollAreaComponent !== ScrollArea,
      maxLineSize,
    },
    { classNames, styles, name: 'Prism' }
  );

  return (
    <Box className={cx(classes.root, className)} ref={ref} {...others}>
      {!noCopy && (
        <Tooltip
          label={clipboard.copied ? copiedLabel : copyLabel}
          position="left"
          withArrow
          arrowSize={6}
          offset={6}
          color={clipboard.copied ? 'teal' : undefined}
        >
          <ActionIcon
            className={classes.copy}
            aria-label={clipboard.copied ? copiedLabel : copyLabel}
            onClick={() => clipboard.copy(code)}
          >
            <CopyIcon copied={clipboard.copied} />
          </ActionIcon>
        </Tooltip>
      )}

      <Highlight
        {...defaultProps}
        theme={getPrismTheme(theme, colorScheme || theme.colorScheme)}
        code={code}
        language={language}
      >
        {({
          className: inheritedClassName,
          style: inheritedStyle,
          tokens,
          getLineProps,
          getTokenProps,
        }) => (
          <ScrollAreaComponent className={classes.scrollArea} dir="ltr">
            <pre className={cx(classes.code, inheritedClassName)} style={inheritedStyle} dir="ltr">
              {tokens
                .map((line, index) => {
                  if (
                    index === tokens.length - 1 &&
                    line.length === 1 &&
                    line[0].content === '\n'
                  ) {
                    return null;
                  }

                  const lineNumber = index + 1;
                  const lineProps = getLineProps({ line, key: index });
                  const shouldHighlight = lineNumber in highlightLines;
                  const lineColor =
                    theme.colorScheme === 'dark'
                      ? theme.fn.rgba(
                          theme.fn.themeColor(highlightLines[lineNumber]?.color, 9),
                          0.25
                        )
                      : theme.fn.themeColor(highlightLines[lineNumber]?.color, 0);

                  return (
                    <div
                      {...lineProps}
                      className={cx(classes.line, lineProps.className)}
                      style={{ ...(shouldHighlight ? { backgroundColor: lineColor } : null) }}
                    >
                      {withLineNumbers && (
                        <div
                          className={classes.lineNumber}
                          style={{
                            color: shouldHighlight
                              ? theme.fn.themeColor(
                                  highlightLines[lineNumber]?.color,
                                  theme.colorScheme === 'dark' ? 5 : 8
                                )
                              : undefined,
                          }}
                        >
                          {highlightLines[lineNumber]?.label || lineNumber}
                        </div>
                      )}

                      <div className={classes.lineContent}>
                        {line.map((token, key) => {
                          const tokenProps = getTokenProps({ token, key });
                          return (
                            <span
                              {...tokenProps}
                              style={{
                                ...tokenProps.style,
                                color: shouldHighlight
                                  ? theme.fn.themeColor(
                                      highlightLines[lineNumber]?.color,
                                      theme.colorScheme === 'dark' ? 5 : 8
                                    )
                                  : (tokenProps?.style?.color as string),
                              }}
                            />
                          );
                        })}
                      </div>
                    </div>
                  );
                })
                .filter(Boolean)}
            </pre>
          </ScrollAreaComponent>
        )}
      </Highlight>
    </Box>
  );
});

Prism.displayName = '@pattern-ui/prism/Prism';
