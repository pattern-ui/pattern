import React from 'react';
import { Sun, MoonStars } from 'tabler-icons-react';
import {
  AppShell,
  Navbar,
  Header,
  Group,
  ActionIcon,
  usePatternColorScheme,
} from '@pattern-ui/core';
import { MainLinks } from './_mainLinks';
import { User } from './_user';
import { Logo } from './_logo';

export default function Demo() {
  const { colorScheme, toggleColorScheme } = usePatternColorScheme();

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          <Navbar.Section grow mt="xs">
            <MainLinks />
          </Navbar.Section>
          <Navbar.Section>
            <User />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60}>
          <Group sx={{ height: '100%' }} px={20} position="apart">
            <Logo colorScheme={colorScheme} />
            <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
              {colorScheme === 'dark' ? <Sun size={16} /> : <MoonStars size={16} />}
            </ActionIcon>
          </Group>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      Your application goes here
    </AppShell>
  );
}
