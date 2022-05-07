import React from 'react';
import { Avatar, Group } from '@pattern/core';
import { avatars } from './_mockdata';

export default function Demo() {
  return (
    <Group position="center">
      <Avatar
        component="a"
        href="https://github.com/rtivital"
        target="_blank"
        src={avatars[0]}
        alt="it's me"
      />
    </Group>
  );
}
