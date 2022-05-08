import React from 'react';
import { usePatternTheme } from '@pattern-ui/styles';
import { Dropzone, IMAGE_MIME_TYPE } from '@pattern-ui/dropzone';
import { dropzoneChildren } from './_base';

export default function Demo() {
  const theme = usePatternTheme();

  return (
    <Dropzone
      onDrop={(files) => console.log('accepted files', files)}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={3 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
    >
      {(status) => dropzoneChildren(status, theme)}
    </Dropzone>
  );
}
