import React from 'react';
import { Pagination } from '@pattern/core';

function Demo() {
  return <Pagination total={10} position="center" />;
}

export const usage: PatternDemo = {
  type: 'demo',
  component: Demo,
};
