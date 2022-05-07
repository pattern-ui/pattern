import React from 'react';
import { usePatternTheme } from '@pattern/styles';
import { Dropzone, IMAGE_MIME_TYPE } from '@pattern/dropzone';
import { dropzoneChildren } from './_base';

function Demo() {
  const theme = usePatternTheme();
  return (
    <Dropzone
      onDrop={(files) => console.log('accepted files', files)}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={3 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      loading
    >
      {(status) => dropzoneChildren(status, theme)}
    </Dropzone>
  );
}

export const loading: PatternDemo = {
  type: 'demo',
  component: Demo,
};
