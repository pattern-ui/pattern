import React from 'react';
import type { SpotlightAction } from '@pattern-ui/spotlight';
import { Wrapper } from './_wrapper';

const onTrigger = () => {};

const actions: SpotlightAction[] = [
  { title: 'Home', group: 'main', onTrigger },
  { title: 'Docs', group: 'main', onTrigger },
  { title: 'Dashboard', group: 'main', onTrigger },
  { title: 'Component: Tabs', group: 'search', onTrigger },
  { title: 'Component: SegmentedControl', group: 'search', onTrigger },
  { title: 'Component: Button', group: 'search', onTrigger },
];

export default function Demo() {
  return <Wrapper actions={actions} searchPlaceholder="Search..." shortcut="mod + shift + V" />;
}
