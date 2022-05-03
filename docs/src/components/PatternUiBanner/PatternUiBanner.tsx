import React from 'react';
import { Title, Overlay, Text, Button, Group } from '@pattern/core';
import { MarkGithubIcon } from '@primer/octicons-react';
import useStyles from './PatternUiBanner.styles';

interface PatternUiBannerProps extends React.ComponentPropsWithoutRef<'div'> {}

export function PatternUiBanner({ className, ...others }: PatternUiBannerProps) {
  const { classes, cx, theme } = useStyles();
  return (
    <div className={cx(classes.root, className)} {...others}>
      <Overlay
        gradient={`linear-gradient(45deg, ${
          theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
        } 25%, rgba(0, 0, 0, 0) 95%)`}
        opacity={0.5}
        zIndex={0}
        radius="md"
      />
      <div className={classes.content}>
        <Title order={2} className={classes.title}>
          Explore <span className={classes.highlight}>Pattern UI</span>
        </Title>

        <Text size="sm" sx={{ lineHeight: 1.7 }}>
          Pattern UI is a set of more than 120 responsive components built with Pattern. All
          components support dark/light color scheme and Pattern theme customizations. Pattern UI is
          free for everyone.
        </Text>
        <Group mt="xl">
          <Button component="a" href="https://ui.pattern-ui.design/">
            View components
          </Button>
          <Button
            className={classes.secondaryControl}
            component="a"
            href="https://github.com/pattern-ui/ui.pattern-ui.design"
            variant="default"
            leftIcon={<MarkGithubIcon size={14} />}
          >
            Source code
          </Button>
        </Group>
      </div>
    </div>
  );
}
