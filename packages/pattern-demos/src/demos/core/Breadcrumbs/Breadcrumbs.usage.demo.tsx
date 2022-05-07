import React from 'react';
import { usePatternTheme, Breadcrumbs, Anchor } from '@pattern-ui/core';

const items = [
  { title: 'Pattern', href: 'https://pattern-ui.design' },
  { title: 'Pattern hooks', href: '#' },
  { title: 'use-id', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

export default function Demo() {
  const theme = usePatternTheme();

  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Breadcrumbs separator={theme.dir === 'ltr' ? '→' : '←'} style={{ marginTop: 10 }}>
        {items}
      </Breadcrumbs>
    </>
  );
}
