import React from 'react';
import { BackgroundImage, BackgroundImageProps, Center, Text, Box } from '@pattern-ui/core';

function Wrapper(props: BackgroundImageProps<'div'>) {
  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <BackgroundImage
        src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        {...props}
      >
        <Center p="md">
          <Text color="#fff">
            BackgroundImage component can be used to add any content on image. It is useful for hero
            headers and other similar sections
          </Text>
        </Center>
      </BackgroundImage>
    </Box>
  );
}

const codeTemplate = (props: string) => `
import { BackgroundImage, Center, Text, Box } from '@pattern-ui/core';

export default function Demo() {
  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <BackgroundImage
        src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
       ${props}
      >
        <Center p="md">
          <Text color="#fff">
            BackgroundImage component can be used to add any content on image. It is useful for hero
            headers and other similar sections
          </Text>
        </Center>
      </BackgroundImage>
    </Box>
  );
}
`;

export const background: PatternControlDemo = {
  type: 'control',
  component: Wrapper,
  codeTemplate,
  demoProps: { multiline: 4 },
  controls: [{ name: 'radius', type: 'size', initialValue: 'sm' }],
};
