import React from 'react';
import { Navbar } from '@pattern-ui/core';
import { User } from './_user';
import { Brand } from './_brand';
import { MainLinks } from './_mainLinks';

export default function Demo() {
  return (
    <Navbar height={600} p="xs" width={{ base: 300 }}>
      <Navbar.Section mt="xs">
        <Brand />
      </Navbar.Section>
      <Navbar.Section grow mt="md">
        <MainLinks />
      </Navbar.Section>
      <Navbar.Section>
        <User />
      </Navbar.Section>
    </Navbar>
  );
}
