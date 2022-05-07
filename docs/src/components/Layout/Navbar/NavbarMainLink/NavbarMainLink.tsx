import React from 'react';
import { Link } from 'gatsby';
import { ThemeIcon, usePatternTheme } from '@pattern-ui/core';
import useStyles from './NavbarMainLink.styles';

interface NavbarMainLinkProps {
  className?: string;
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  color: string;
  onClick(): void;
}

export default function NavbarMainLink({
  to,
  className,
  icon,
  children,
  color,
  onClick,
}: NavbarMainLinkProps) {
  const { classes, cx } = useStyles();
  const theme = usePatternTheme();

  return (
    <Link
      className={cx(classes.mainLink, className)}
      activeClassName={classes.active}
      to={to}
      onClick={onClick}
    >
      <ThemeIcon size={30} sx={{ backgroundColor: color, color: theme.white }} radius="lg">
        {icon}
      </ThemeIcon>
      <div className={classes.body}>{children}</div>
    </Link>
  );
}
