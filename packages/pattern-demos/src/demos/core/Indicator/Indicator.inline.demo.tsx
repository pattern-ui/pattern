import React from 'react';
import { Avatar, Indicator } from '@pattern-ui/core';

export default function Demo() {
  return (
    <Indicator inline label="New" size={16}>
      <Avatar
        size="lg"
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
      />
    </Indicator>
  );
}
