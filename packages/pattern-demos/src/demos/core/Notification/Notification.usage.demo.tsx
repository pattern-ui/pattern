import React from 'react';
import { Check, X } from 'tabler-icons-react';
import { Notification } from '@pattern/core';
import { demoBase } from './_demo-base';

export default function Demo() {
  return (
    <>
      <Notification title="Default notification" onClose={() => {}}>
        This is default notification with title and body
      </Notification>

      <Notification
        style={{ marginTop: 15 }}
        icon={<Check size={18} />}
        color="teal"
        title="Teal notification"
        onClose={() => {}}
      >
        This is teal notification with icon
      </Notification>

      <Notification style={{ marginTop: 15 }} icon={<X size={18} />} color="red" onClose={() => {}}>
        Bummer! Notification without title
      </Notification>

      <Notification
        style={{ marginTop: 15 }}
        loading
        title="Uploading data to the server"
        disallowClose
        onClose={() => {}}
      >
        Please wait until data is uploaded, you cannot close this notification yet
      </Notification>
    </>
  );
}

export const usage: PatternDemo = {
  ...demoBase,
  type: 'demo',
  component: Demo,
};
