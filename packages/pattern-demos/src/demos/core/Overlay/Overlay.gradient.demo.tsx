import React from 'react';
import { usePatternTheme, Button, Box, Overlay } from '@pattern-ui/core';

export default function Demo() {
  const theme = usePatternTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        height: 200,
        width: '100%',
        maxWidth: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button>Under overlay</Button>
      <Overlay
        gradient={`linear-gradient(105deg, ${theme.black} 20%, #312f2f 50%, ${theme.colors.gray[4]} 100%)`}
      />
    </Box>
  );
}
