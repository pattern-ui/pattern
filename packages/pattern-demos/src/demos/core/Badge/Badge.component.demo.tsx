import React from 'react';
import { Group, Badge } from '@pattern/core';

const CustomComponent = ({
  pads,
  children,
  ...others
}: {
  pads: string;
  children: React.ReactNode;
}) => (
  <div {...others}>
    {pads} {children} {pads}
  </div>
);

export default function Demo() {
  return (
    <Group position="center">
      <Badge component="a" href="https://pattern-ui.design" variant="outline">
        Link badge
      </Badge>

      <Badge component={CustomComponent} pads="$$$" variant="filled">
        Get lots of money
      </Badge>
    </Group>
  );
}
