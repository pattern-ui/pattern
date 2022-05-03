import React from 'react';
import { Col, ColProps, Text, usePatternTheme, Box } from '@pattern/core';

export function ColWrapper(props: ColProps) {
  const theme = usePatternTheme();
  return (
    <Col {...props}>
      <Box
        sx={{
          minHeight: props.style?.minHeight ? props.style.minHeight : null,
          height: '100%',
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.blue[0],
          padding: theme.spacing.md,
        }}
      >
        <Text
          color={theme.colorScheme === 'dark' ? 'gray' : 'blue'}
          size="xl"
          weight={700}
          align="center"
        >
          {props.children}
        </Text>
      </Box>
    </Col>
  );
}
