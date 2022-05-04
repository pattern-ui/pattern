import React from 'react';
import { Navbar } from '@pattern/core';
import { User } from './_user';
import { Brand } from './_brand';
import { MainLinks } from './_mainLinks';

const code = `
import { Navbar } from '@pattern/core';

function Demo() {
  return (
    <Navbar height={600} p="xs" width={{ base: 300 }}>
      <Navbar.Section>{/* Header with logo */}</Navbar.Section>
      <Navbar.Section grow mt="md">{/* Links sections */}</Navbar.Section>
      <Navbar.Section>{/* Footer with user */}</Navbar.Section>
    </Navbar>
  );
}
`;

function Demo() {
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

export const navbar: PatternDemo = {
  type: 'demo',
  component: Demo,
  demoProps: { spacing: false },
  code,
};
