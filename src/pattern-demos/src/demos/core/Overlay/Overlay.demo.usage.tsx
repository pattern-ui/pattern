import React, { useState } from 'react';
import { Button, Group, Box, Overlay } from '@pattern/core';

const code = `
import { useState } from 'react';
import { Button, Group, Box, Overlay } from '@pattern/core';

function Demo() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Box sx={{ height: 100, position: 'relative' }}>
        {visible && <Overlay opacity={0.6} color="#000" zIndex={5} />}
        <Button color={visible ? 'red' : 'teal'}>
          {!visible ? 'Click as much as you like' : "Won't click, haha"}
        </Button>
      </Box>

      <Group position="center">
        <Button onClick={() => setVisible((v) => !v)}>Toggle overlay</Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Box
        sx={{
          margin: 'auto',
          position: 'relative',
          height: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {visible && <Overlay opacity={0.6} color="#000" />}
        <Button color={visible ? 'red' : 'teal'}>
          {!visible ? 'Click as much as you like' : "Won't click, haha"}
        </Button>
      </Box>

      <Group position="center" mt={20}>
        <Button onClick={() => setVisible((v) => !v)}>Toggle overlay</Button>
      </Group>
    </>
  );
}

export const usage: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};
