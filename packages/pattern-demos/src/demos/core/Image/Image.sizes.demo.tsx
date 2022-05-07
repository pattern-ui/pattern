import React from 'react';
import { Image, Group } from '@pattern/core';

const image =
  'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80';

export default function Demo() {
  return (
    <Group position="center">
      <Image width={200} height={80} src={image} />
      <Image width={200} height={80} fit="contain" src={image} />
      <Image height={80} src={image} />
    </Group>
  );
}
