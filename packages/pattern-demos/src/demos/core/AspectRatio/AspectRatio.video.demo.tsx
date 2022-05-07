import React from 'react';
import { AspectRatio } from '@pattern/core';

function Demo() {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.youtube.com/embed/Dorf8i6lCuk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </AspectRatio>
  );
}

export const video: PatternDemo = {
  type: 'demo',
  component: Demo,
};
