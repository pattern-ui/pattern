import React from 'react';
import { BrandTwitter } from 'tabler-icons-react';
import { Input } from '@pattern-ui/core';

export default function Demo() {
  return (
    <Input
      styles={{ input: { width: '100%', boxSizing: 'border-box' } }}
      icon={<BrandTwitter size={16} />}
      rightSection="$"
      variant="headless"
      placeholder="Add your own styles with styles API"
    />
  );
}
