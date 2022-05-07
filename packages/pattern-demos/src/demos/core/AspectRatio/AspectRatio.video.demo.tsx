import React from 'react';
import { AspectRatio } from '@pattern/core';

export default function Demo() {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.example.com"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </AspectRatio>
  );
}
