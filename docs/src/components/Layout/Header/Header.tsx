import React from 'react';
import { Burger, Code } from '@pattern-ui/core';
// eslint-disable-next-line import/no-relative-packages
import corePackageJson from '../../../../../package.json';
import { Logo } from '../../Logo/Logo';
import { HeaderControls } from './HeaderControls/HeaderControls';
import useStyles from './Header.styles';

interface HeaderProps {
  navbarOpened: boolean;
  toggleNavbar(): void;
}

export default function Header({ navbarOpened, toggleNavbar }: HeaderProps) {
  const { classes } = useStyles();
  const burgerTitle = navbarOpened ? 'Open navigation' : 'Hide navigation';

  return (
    <div className={classes.header}>
      <div className={classes.mainSection}>
        <Burger
          opened={navbarOpened}
          className={classes.burger}
          size="sm"
          onClick={toggleNavbar}
          title={burgerTitle}
          aria-label={burgerTitle}
        />
        <div className={classes.logoWrapper}>
          <div className={classes.logo}>
            <Logo />
          </div>

          <a href="https://github.com/pattern-ui/pattern/releases" className={classes.version}>
            <Code>v{corePackageJson.version}</Code>
          </a>
        </div>
      </div>

      <HeaderControls />
    </div>
  );
}
