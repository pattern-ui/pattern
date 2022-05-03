import React, { useState } from 'react';
import { Container } from '@pattern/core';
import { Footer } from '../Footer/Footer';
import Head from '../Head/Head';
import { Installation } from './Installation/Installation';
import { Guides } from './Guides/Guides';
import { NextSteps } from './NextSteps/NextSteps';
import { PatternUiBanner } from '../PatternUiBanner/PatternUiBanner';
import useStyles from './GettingStarted.styles';

export function GettingStarted() {
  const { classes } = useStyles();
  const [dependencies, setDependencies] = useState('@pattern/hooks @pattern/core');

  return (
    <>
      <Head title="Getting started" />

      <div className={classes.wrapper}>
        <Container px={null} className={classes.container} size={1100}>
          <Installation setDependencies={setDependencies} />
          <Guides dependencies={dependencies} />
          <NextSteps />
          <PatternUiBanner />
        </Container>
      </div>

      <Footer withNavbar />
    </>
  );
}
