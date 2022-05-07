import React from 'react';
import { Avatar, Group, AvatarsGroup } from '@pattern/core';
import { avatars } from './_mockdata';

export default function Demo() {
  return (
    <Group position="center">
      <AvatarsGroup spacing="lg" limit={3}>
        <Avatar component="a" href="https://github.com/rtivital" src={avatars[0]} alt="it's me" />
        <Avatar color="blue" radius="xl" src={avatars[1]} />
        <Avatar radius="xl" src={avatars[2]} />
        <Avatar color="cyan" radius="xl" src={avatars[2]} />
        <Avatar color="cyan" radius="xl" src={avatars[2]} />
      </AvatarsGroup>
    </Group>
  );
}
