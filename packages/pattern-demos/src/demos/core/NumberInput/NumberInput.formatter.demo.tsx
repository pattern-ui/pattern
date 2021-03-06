import React from 'react';
import { NumberInput } from '@pattern-ui/core';

export default function Demo() {
  return (
    <div style={{ maxWidth: 420, margin: 'auto' }}>
      <NumberInput
        defaultValue={1000}
        formatter={(value) =>
          !Number.isNaN(parseFloat(value))
            ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            : '$ '
        }
        parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
      />
    </div>
  );
}
