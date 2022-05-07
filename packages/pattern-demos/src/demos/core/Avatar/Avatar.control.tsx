import React from 'react';
import { Avatar, AvatarProps, Group } from '@pattern-ui/core';
import { avatars } from './_mockdata';

function Wrapper(props: AvatarProps<'div'>) {
  return (
    <Group position="center">
      <Avatar {...props} />
    </Group>
  );
}

const codeTemplate = (props: string) => `
import { Avatar } from '@pattern-ui/core';

export default function Demo() {
  return <Avatar${props} />;
}
`;

export const control: PatternControlDemo = {
  type: 'control',
  component: Wrapper,
  codeTemplate,
  controls: [
    { name: 'radius', type: 'size', initialValue: 'xs', defaultValue: 'xs' },
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    {
      name: 'src',
      type: 'string',
      initialValue: avatars[1],
    },
  ],
};
