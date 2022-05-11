import React, { useState } from 'react';
import { Language } from 'prism-react-renderer';
import { CodeIcon } from '@modulz/radix-icons';
import { usePatternTheme, Paper, Group, ActionIcon, Tooltip, Tabs } from '@pattern-ui/core';
import { Prism } from '@pattern-ui/prism';
import useStyles from './CodeDemo.styles';

interface CodeDemoProps {
  code?: string;
  imports?: Array<{
    raw: string;
    name: string;
    content: string;
  }>;
  language?: Language;
  demoBackground?: string;
  demoBorder?: boolean;
  children?: React.ReactNode;
  toggle?: boolean;
  inline?: boolean;
  spacing?: boolean;
  zIndex?: number;
}

export default function CodeDemo({
  code,
  imports,
  language,
  children,
  demoBackground,
  demoBorder = true,
  toggle = false,
  inline = false,
  spacing = true,
  zIndex = 3,
}: CodeDemoProps) {
  const { classes, cx } = useStyles();
  const [visible, setVisible] = useState(!toggle);
  const theme = usePatternTheme();

  if (inline) {
    return <div>{children}</div>;
  }

  return (
    <div style={{ marginBottom: theme.spacing.xl, marginTop: theme.spacing.md }}>
      <Paper
        p={spacing ? 'md' : 0}
        className={cx(classes.demo, { [classes.withToggle]: toggle })}
        style={{
          backgroundColor:
            demoBackground || (theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white),
          borderColor: demoBorder ? undefined : 'transparent',
          zIndex,
        }}
      >
        {children}

        {!!code && toggle && (
          <Group position="center" direction="column" spacing={5} className={classes.controls}>
            <Tooltip
              label={`${visible ? 'Hide' : 'Show'} code`}
              position="left"
              transition="fade"
              withArrow
              arrowSize={6}
              offset={6}
              positionDependencies={[visible]}
            >
              <ActionIcon
                variant="hover"
                onClick={() => setVisible((v) => !v)}
                aria-label="Toggle code"
              >
                <CodeIcon />
              </ActionIcon>
            </Tooltip>
          </Group>
        )}
      </Paper>

      {code &&
        visible &&
        (!imports || imports.length === 0 ? (
          <Prism language={language} className={classes.prism} classNames={{ code: classes.code }}>
            {code}
          </Prism>
        ) : (
          <Tabs defaultValue="demo">
            <Tabs.List style={{
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: theme.colorScheme === 'dark' ? '#25262b' : '#f1f3f5',
              borderBottom: 'none',
            }}
            >
              <Tabs.Tab value="demo">demo.tsx</Tabs.Tab>
              {imports.map((imp) => (
                <Tabs.Tab key={imp.name} value={imp.name}>
                  {imp.name}
                </Tabs.Tab>
              ))}
            </Tabs.List>

            <Tabs.Panel value="demo">
              <Prism
                language={language}
                className={classes.prism}
                classNames={{ code: classes.code }}
              >
                {code}
              </Prism>
            </Tabs.Panel>
            {imports.map((imp) => (
              <Tabs.Panel key={imp.name} value={imp.name}>
                <Prism
                  language={language}
                  className={classes.prism}
                  classNames={{ code: classes.code }}
                >
                  {imp.content}
                </Prism>
              </Tabs.Panel>
            ))}
          </Tabs>
        ))}
    </div>
  );
}
