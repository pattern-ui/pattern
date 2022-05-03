import React from 'react';
import { Star } from 'tabler-icons-react';
import { Avatar, Group } from '@pattern/core';
import { avatars } from './_mockdata';

const code = `
import { Avatar } from '@pattern/core';
import { Star } from 'tabler-icons-react';

function Demo() {
  return (
    <>
      {/* With image */}
      <Avatar src="avatar.png" alt="it's me" />

      {/* Default placeholder */}
      <Avatar radius="xl" />

      {/* Letters with xl radius */}
      <Avatar color="cyan" radius="xl">MK</Avatar>

      {/* Custom placeholder icon */}
      <Avatar color="blue" radius="sm">
        <Star size={24} />
      </Avatar>
    </>
  );
}

`;

function Demo() {
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

export const usage: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};
