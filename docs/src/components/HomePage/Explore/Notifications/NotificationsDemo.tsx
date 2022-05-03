import React from 'react';
import { Paper, createStyles } from '@pattern/core';
import { Prism } from '@pattern/prism';
import { NotificationsDemos, Demo } from '@pattern/demos';

const code = `import { Button } from '@pattern/core';
import { useNotifications } from '@pattern/notifications';

function Demo() {
  const notifications = useNotifications();
  const showNotification = () => notifications.showNotification({
    title: 'Default notification',
    message: 'Hey there, your code is awesome! 🤥',
  });

  return (
    <Button onClick={showNotification}>
      Show notification
    </Button>
  );
}`;

const useStyles = createStyles((theme) => ({
  prism: {
    '& pre': {
      backgroundColor: `${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
      } !important`,
      borderRadius: theme.radius.md,
      padding: 14,
      paddingTop: 0,
      paddingBottom: 0,
      marginLeft: -30,
      marginRight: -30,
    },
  },
}));

export function NotificationsDemo() {
  const { classes } = useStyles();
  return (
    <Paper shadow="md" p={30} radius="md">
      <Demo data={NotificationsDemos.root} demoProps={{ inline: true }} />
      <Prism noCopy language="tsx" className={classes.prism} mt="xl">
        {code}
      </Prism>
    </Paper>
  );
}
