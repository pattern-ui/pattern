import React from 'react';
import { Settings, MessageCircle, Coin } from 'tabler-icons-react';
import { Tabs } from '@pattern/core';

export default function Demo() {
  return (
    <Tabs defaultValue="chat">
      <Tabs.List>
        <Tabs.Tab icon={<MessageCircle size={14} />} value="chat">
          Chat
        </Tabs.Tab>
        <Tabs.Tab icon={<Settings size={14} />} value="settings">
          Settings
        </Tabs.Tab>
        <Tabs.Tab icon={<Coin size={14} />} value="money" aria-label="Get money" />
      </Tabs.List>
    </Tabs>
  );
}
