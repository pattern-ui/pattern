import React from 'react';
import { createStyles, usePatternTheme } from '@pattern-ui/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@pattern-ui/dropzone';
import { dropzoneChildren } from './_base';

const useStyles = createStyles((theme) => ({
  disabled: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
    cursor: 'not-allowed',

    '& *': {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
    },
  },
}));

export default function Demo() {
  const { classes } = useStyles();
  const theme = usePatternTheme();

  return (
    <Dropzone
      onDrop={(files) => console.log('accepted files', files)}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={3 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      className={classes.disabled}
    >
      {(status) => dropzoneChildren(status, theme)}
    </Dropzone>
  );
}
