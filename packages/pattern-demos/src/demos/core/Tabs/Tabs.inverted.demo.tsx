import React from 'react';
import { Tabs } from '@pattern/core';

export default function Demo() {
  return (
    <Tabs defaultValue="chat" inverted>
      <Tabs.Panel value="chat" pb="xs">
        Chat panel
      </Tabs.Panel>
      <Tabs.Panel value="gallery" pb="xs">
        Gallery panel
      </Tabs.Panel>
      <Tabs.Panel value="account" pb="xs">
        Account panel
      </Tabs.Panel>

      <Tabs.List>
        <Tabs.Tab value="chat">Chat</Tabs.Tab>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="account">Account</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
