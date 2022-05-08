/* eslint-disable no-console */
import React, { useState } from 'react';
import { Button, Group, usePatternTheme } from '@pattern-ui/core';
import { FullScreenDropzone, IMAGE_MIME_TYPE } from '@pattern-ui/dropzone';
import { dropzoneChildren } from './_base';

export default function Demo() {
  const [disabled, setDisabled] = useState(true);
  const theme = usePatternTheme();

  return (
    <>
      <Group position="center">
        <Button color={disabled ? 'blue' : 'red'} onClick={() => setDisabled((d) => !d)}>
          {disabled ? 'Enable' : 'Disable'} full screen dropzone
        </Button>
      </Group>

      <FullScreenDropzone
        disabled={disabled}
        accept={IMAGE_MIME_TYPE}
        onDrop={(files) => {
          console.log(files);
          setDisabled(true);
        }}
      >
        {(status) => dropzoneChildren(status, theme)}
      </FullScreenDropzone>
    </>
  );
}
