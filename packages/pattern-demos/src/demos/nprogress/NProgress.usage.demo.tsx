import { Button, Group } from '@pattern/core';
import {
  NProgress,
  addNProgress,
  decreaseNProgress,
  setNProgress,
  startNProgress,
  stopNProgress,
  resetNProgress,
} from '@pattern/nprogress';
import React from 'react';

export default function Demo() {
  return (
    <>
      <NProgress />
      <Group position="center">
        <Button onClick={() => addNProgress(10)}>Add 10%</Button>
        <Button color="red" onClick={() => decreaseNProgress(10)}>
          Decrease 10%
        </Button>
        <Button onClick={() => setNProgress(50)}>Set 50%</Button>
        <Button onClick={() => startNProgress()}>Start</Button>
        <Button onClick={() => stopNProgress()}>Stop</Button>
        <Button onClick={() => resetNProgress()}>Reset</Button>
      </Group>
    </>
  );
}
