import React from 'react';
import { BaseDemo } from './_base';

const code = `
import { Dropzone } from '@pattern/dropzone';

function Demo() {
  return (
    <Dropzone loading>
      {/* children */}
    </Dropzone>
  );
}
`;

function Demo() {
  return <BaseDemo loading />;
}

export const loading: PatternDemo = {
  type: 'demo',
  component: Demo,
  code,
};
