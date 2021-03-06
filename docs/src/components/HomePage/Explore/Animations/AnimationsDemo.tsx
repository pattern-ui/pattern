import React, { useState } from 'react';
import { Prism } from '@pattern-ui/prism';
import { Title, Modal, Button, Paper, createStyles } from '@pattern-ui/core';
import { AuthenticationForm, TooltipDemos } from '@pattern-ui/demos';

const scaleY = {
  in: { opacity: 1, transform: 'scaleY(1)' },
  out: { opacity: 0, transform: 'scaleY(0)' },
  common: { transformOrigin: 'top' },
  transitionProperty: 'transform, opacity',
};

const code = `
const scaleY = {
  in: { opacity: 1, transform: 'scaleY(1)' },
  out: { opacity: 0, transform: 'scaleY(0)' },
  common: { transformOrigin: 'top' },
  transitionProperty: 'transform, opacity',
};

<Modal transition={scaleY} transitionDuration={300}>
  <AuthenticationForm />
</Modal>
`;

const useStyles = createStyles((theme) => ({
  prism: {
    '& pre': {
      backgroundColor: `${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
      } !important`,
      borderRadius: theme.radius.md,
      padding: 14,
      paddingTop: 0,
      paddingBottom: 10,
      marginLeft: -30,
      marginRight: -30,
    },
  },
}));

export function AnimationsDemo() {
  const Transitions = TooltipDemos.transitions;
  const [modalOpened, setModalOpened] = useState(false);
  const { classes } = useStyles();
  return (
    <Paper shadow="md" p={30} radius="md">
      <Title order={4} mb="md">
        Use premade transitions with any component
      </Title>

      <Transitions />

      <Title order={4} mb="xs" mt="xl">
        Or create your own transitions
      </Title>

      <Prism language="tsx" noCopy className={classes.prism}>
        {code}
      </Prism>

      <Button variant="outline" onClick={() => setModalOpened(true)} mt="md">
        Open modal with scaleY transition
      </Button>

      <Modal
        title="Register"
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        transition={scaleY}
        transitionDuration={300}
      >
        <div>
          <AuthenticationForm noShadow noPadding />
        </div>
      </Modal>
    </Paper>
  );
}
