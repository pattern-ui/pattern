import React from 'react';
import { Image, SimpleGrid } from '@pattern-ui/core';

import darkTheme from './assets/dark-theme.png';
import notifications from './assets/notifications.gif';
import richTextEditor from './assets/rich-text-editor.png';
import socialMedia from './assets/social-media.png';

const data = [
  { image: socialMedia, title: 'Social media preview' },
  { image: darkTheme, title: 'Dark/light theme' },
  { image: notifications, title: '@pattern-ui/notifications example' },
  { image: richTextEditor, title: '@pattern-ui/rte RichTextEditor' },
];

export function Images() {
  const images = data.map(({ image, title }) => (
    <Image src={image as any} caption={title} alt={title} radius="md" />
  ));

  return (
    <SimpleGrid cols={2} breakpoints={[{ maxWidth: 900, cols: 1 }]} spacing={30}>
      {images}
    </SimpleGrid>
  );
}
