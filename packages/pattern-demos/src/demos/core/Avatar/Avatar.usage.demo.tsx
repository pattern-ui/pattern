import React from 'react';
import { Star } from 'tabler-icons-react';
import { Avatar, Group } from '@pattern-ui/core';
import { avatars } from './_mockdata';

export default function Demo() {
  return (
    <Group position="center">
      <Avatar src={avatars[0]} alt="it's me" />
      <Avatar radius="xl" />
      <Avatar color="cyan" radius="xl">
        MK
      </Avatar>
      <Avatar color="blue" radius="xl">
        <Star size={24} />
      </Avatar>
    </Group>
  );
}
