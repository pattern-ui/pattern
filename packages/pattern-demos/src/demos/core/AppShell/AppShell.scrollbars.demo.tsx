import React from 'react';
import { ScrollArea, Navbar, Box } from '@pattern-ui/core';
import { User } from './_user';
import { Brand } from './_brand';
import { MainLinks } from './_mainLinks';

export default function Demo() {
  return (
    <Navbar height={600} p="xs" width={{ base: 300 }}>
      <Navbar.Section mt="xs">
        <Brand />
      </Navbar.Section>
      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        <Box py="md">
          <MainLinks />
          <MainLinks />
          <MainLinks />
          <MainLinks />
        </Box>
      </Navbar.Section>
      <Navbar.Section>
        <User />
      </Navbar.Section>
    </Navbar>
  );
}
