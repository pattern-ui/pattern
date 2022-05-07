import React from 'react';
import { Star } from 'tabler-icons-react';
import { Avatar, Group } from '@pattern-ui/core';

export default function Demo() {
  return (
    <Group position="center">
      <Group position="center">
        <Avatar src={null} alt="no image here" />
        <Avatar src={null} alt="no image here" color="indigo" />
        <Avatar src={null} alt="no image here" color="red">
          VR
        </Avatar>
        <Avatar color="blue" radius="xl">
          <Star size={24} />
        </Avatar>
      </Group>
    </Group>
  );
}
