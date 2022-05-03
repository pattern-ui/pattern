import React from 'react';
import { Text, Pagination } from '@pattern/core';

const code = `
import { Text, Pagination } from '@pattern/core';

function Demo() {
  return (
    <>
      <Text mb={10}>1 sibling (default)</Text>
      <Pagination total={20} siblings={1} initialPage={10} />

      <Text mb={10} mt={30}>
        2 siblings
      </Text>
      <Pagination total={20} siblings={2} initialPage={10} />

      <Text mb={10} mt={30}>
        3 siblings
      </Text>
      <Pagination total={20} siblings={3} initialPage={10} />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Text mb={10}>1 sibling (default)</Text>
      <Pagination total={20} siblings={1} initialPage={10} />

      <Text mb={10} mt={30}>
        2 siblings
      </Text>
      <Pagination total={20} siblings={2} initialPage={10} />

      <Text mb={10} mt={30}>
        3 siblings
      </Text>
      <Pagination total={20} siblings={3} initialPage={10} />
    </>
  );
}

export const siblings: PatternDemo = {
  type: 'demo',
  code,
  component: Demo,
};
