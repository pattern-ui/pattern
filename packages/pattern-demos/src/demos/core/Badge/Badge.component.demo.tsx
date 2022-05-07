import React from 'react';
import { Group, Badge } from '@pattern/core';

const code = `
import { Badge } from '@pattern/core';

const CustomComponent = ({ pads, children, ...others }: { pads: string; children: React.ReactNode; }) => (
  <div {...others}>
    {pads} {children} {pads}
  </div>
);

function Demo() {
  return (
    <>
      <Badge component="a" href="https://pattern-ui.design" variant="outline">
        Link badge
      </Badge>

      <Badge component={CustomComponent} pads="$$$" variant="filled">
        Get lots of money
      </Badge>
    </>
  );
}
`;

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

function Demo() {
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

export const component: PatternDemo = {
  type: 'demo',
  component: Demo,
};
