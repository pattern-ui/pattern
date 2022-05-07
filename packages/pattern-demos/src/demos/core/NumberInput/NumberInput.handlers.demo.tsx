import React, { useState, useRef } from 'react';
import {
  NumberInput,
  Group,
  ActionIcon,
  NumberInputHandlers,
  usePatternTheme,
} from '@pattern/core';

export default function Demo() {
  const theme = usePatternTheme();
  const [value, setValue] = useState(0);
  const handlers = useRef<NumberInputHandlers>();

  const controlStyles = {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    borderColor: theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[4],
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
    transitionDuration: '0ms',
  };

  return (
    <Group spacing={5} position="center">
      <ActionIcon
        size={36}
        variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
        onClick={() => handlers.current.decrement()}
        style={controlStyles}
      >
        –
      </ActionIcon>
      <NumberInput
        hideControls
        value={value}
        onChange={(val) => setValue(val)}
        handlersRef={handlers}
        placeholder="0"
        max={10}
        min={0}
        step={2}
        styles={{ input: { width: 54, textAlign: 'center' } }}
      />
      <ActionIcon
        size={36}
        variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
        onClick={() => handlers.current.increment()}
        style={controlStyles}
      >
        +
      </ActionIcon>
    </Group>
  );
}
