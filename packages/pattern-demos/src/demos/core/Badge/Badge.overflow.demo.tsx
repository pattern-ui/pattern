import React from 'react';
import { Badge } from '@pattern-ui/core';

export default function Demo() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: 200 }}>
        <Badge variant="filled" fullWidth>
          Full width badge
        </Badge>
      </div>

      <div style={{ width: 120, marginLeft: 15 }}>
        <Badge variant="filled" fullWidth>
          Badge with overflow
        </Badge>
      </div>
    </div>
  );
}
