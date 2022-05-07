import React, { useRef } from 'react';
import { Button, Group, usePatternTheme } from '@pattern/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@pattern/dropzone';
import { dropzoneChildren } from './_base';

export default function Demo() {
  const openRef = useRef<() => void>();
  const theme = usePatternTheme();

  return (
    <>
      <Dropzone
        onDrop={(files) => console.log('accepted files', files)}
        onReject={(files) => console.log('rejected files', files)}
        maxSize={3 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
        openRef={openRef}
      >
        {(status) => dropzoneChildren(status, theme)}
      </Dropzone>
      <Group position="center" mt="md">
        <Button onClick={() => openRef.current()}>Select files</Button>
      </Group>
    </>
  );
}
