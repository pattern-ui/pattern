import React from 'react';
import { Group, Badge } from '@pattern-ui/core';

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
      <Badge component="a" href="https://pattern.icu" variant="outline">
        Link badge
      </Badge>

      <Badge component={CustomComponent} pads="$$$" variant="filled">
        Get lots of money
      </Badge>
    </Group>
  );
}
