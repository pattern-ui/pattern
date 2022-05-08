import React from 'react';
import { Eye, Code, ExternalLink } from 'tabler-icons-react';
import { Center, SegmentedControl, Box, Group } from '@pattern-ui/core';

export default function Demo() {
  return (
    <Group position="center">
      <SegmentedControl
        data={[
          {
            value: 'preview',
            label: (
              <Center>
                <Eye size={16} />
                <Box ml={10}>Preview</Box>
              </Center>
            ),
          },
          {
            value: 'code',
            label: (
              <Center>
                <Code size={16} />
                <Box ml={10}>Code</Box>
              </Center>
            ),
          },
          {
            value: 'export',
            label: (
              <Center>
                <ExternalLink size={16} />
                <Box ml={10}>Export</Box>
              </Center>
            ),
          },
        ]}
      />
    </Group>
  );
}
