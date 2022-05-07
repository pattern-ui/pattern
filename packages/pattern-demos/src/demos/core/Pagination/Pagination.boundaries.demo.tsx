import React from 'react';
import { Text, Pagination } from '@pattern/core';

export default function Demo() {
  return (
    <>
      <Text mb={10}>1 boundary (default)</Text>
      <Pagination total={20} boundaries={1} initialPage={10} />

      <Text mt={30} mb={10} style={{ marginTop: 30, marginBottom: 10 }}>
        2 boundaries
      </Text>
      <Pagination total={20} boundaries={2} initialPage={10} />

      <Text mt={30} mb={10}>
        3 boundaries
      </Text>
      <Pagination total={20} boundaries={3} initialPage={10} />
    </>
  );
}
