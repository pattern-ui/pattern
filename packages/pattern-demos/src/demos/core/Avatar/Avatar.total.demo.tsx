import React from 'react';
import { Avatar, Group, AvatarsGroup } from '@pattern/core';
import { avatars } from './_mockdata';

export default function Demo() {
  return (
    <Group position="center">
      <AvatarsGroup spacing="lg" limit={2} total={7}>
        <Avatar component="a" href="https://github.com/rtivital" src={avatars[0]} alt="it's me" />
        <Avatar radius="xl" src={avatars[1]} />
      </AvatarsGroup>
    </Group>
  );
}
