import React from 'react';
import { usePatternTheme, Breadcrumbs, Anchor } from '@pattern/core';

const code = `
import { Breadcrumbs, Anchor } from '@pattern/core';

const items = [
  { title: 'Pattern', href: '#' },
  { title: 'Pattern hooks', href: '#' },
  { title: 'use-id', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

function Demo() {
  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Breadcrumbs separator="→">{items}</Breadcrumbs>
    </>
  );
}
`;

const items = [
  { title: 'Pattern', href: 'https://pattern-ui.design' },
  { title: 'Pattern hooks', href: '#' },
  { title: 'use-id', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

function Demo() {
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

export const usage: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};
