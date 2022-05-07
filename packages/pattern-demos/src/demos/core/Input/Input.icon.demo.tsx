import React from 'react';
import { BrandTwitter } from 'tabler-icons-react';
import { Input, Badge } from '@pattern-ui/core';

export default function Demo() {
  return (
    <Input
      icon={<BrandTwitter size={16} />}
      placeholder="Your twitter"
      rightSectionWidth={70}
      styles={{ rightSection: { pointerEvents: 'none' } }}
      rightSection={
        <Badge color="blue" variant="filled">
          new
        </Badge>
      }
    />
  );
}
