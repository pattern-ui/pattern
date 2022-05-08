import React, { useState } from 'react';
import { LoadingOverlay, Button, Group, usePatternTheme } from '@pattern-ui/core';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';
import { demoBase } from './_demo-base';

export default function Demo() {
  const [visible, setVisible] = useState(false);
  const theme = usePatternTheme();

  return (
    <>
      <div
        style={{
          borderRadius: 4,
          position: 'relative',
          margin: 'auto',
        }}
      >
        <LoadingOverlay visible={visible} zIndex={1000} style={{ borderRadius: 4 }} />
        <AuthenticationForm noSubmit noShadow={theme.colorScheme === 'dark'} />
      </div>

      <Group position="center" style={{ marginTop: 20 }}>
        <Button onClick={() => setVisible((v) => !v)}>Toggle overlay</Button>
      </Group>
    </>
  );
}

export const usage: PatternCodeDemo = {
  ...demoBase,
  type: 'code',
  component: Demo,
};
