import React from 'react';
import { Container, Title } from '@pattern-ui/core';
import { Footer } from '../Footer/Footer';
import { Colors } from './Colors/Colors';
import { useColorsState } from './use-colors-state/use-colors-state';
import useStyles from './ThemeBuilder.styles';

export function ThemeBuilder() {
  const { classes } = useStyles();
  const colors = useColorsState();

  return (
    <>
      <div className={classes.wrapper}>
        <Container className={classes.container} size={1100}>
          <Title className={classes.title}>Pattern theme builder</Title>
          <Colors {...colors} />
        </Container>
      </div>
      <Footer withNavbar />
    </>
  );
}
