/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { SimpleGrid, Button, Group, createStyles, DEFAULT_THEME } from '@pattern-ui/core';
import { useClipboard } from '@pattern-ui/hooks';

import fullLogoCode from '!!raw-loader!./assets/pattern-logo-full.svg';
import fullLogoImage from './assets/pattern-logo-full.svg';

import whiteLogoCode from '!!raw-loader!./assets/pattern-logo-white.svg';
import whiteLogoImage from './assets/pattern-logo-white.svg';

import logoCode from '!!raw-loader!./assets/pattern-logo.svg';
import logoImage from './assets/pattern-logo.svg';

interface LogoAssetProps {
  image: string;
  imageWidth: number;
  code: string;
  fileName: string;
  background: string;
}

const useStyles = createStyles((theme) => ({
  imageWrapper: {
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
  },
}));

export const universalBtoa = (str) => {
  try {
    return btoa(str);
  } catch (err) {
    return Buffer.from(str).toString('base64');
  }
};

function LogoAsset({ image, code, fileName, imageWidth, background, ...others }: LogoAssetProps) {
  const clipboard = useClipboard();
  const { classes } = useStyles();

  return (
    <div {...others}>
      <div className={classes.imageWrapper} style={{ backgroundColor: background }}>
        <img src={image} alt={fileName} style={{ maxWidth: '100%', width: imageWidth }} />
      </div>

      <Group noWrap grow mt={10}>
        <Button
          component="a"
          download={fileName}
          href={`data:image/svg+xml;charset=utf-8;base64,${universalBtoa(code)}`}
        >
          Download svg
        </Button>
        <Button
          variant={clipboard.copied ? 'filled' : 'default'}
          color="teal"
          onClick={() => clipboard.copy(code)}
        >
          {clipboard.copied ? 'Copied' : 'Copy svg code'}
        </Button>
      </Group>
    </div>
  );
}

export function Logos() {
  return (
    <SimpleGrid cols={3} spacing={40} breakpoints={[{ maxWidth: 900, cols: 1 }]}>
      <LogoAsset
        image={logoImage}
        code={logoCode}
        background="#fff"
        fileName="pattern-logo.svg"
        imageWidth={47}
      />
      <LogoAsset
        image={fullLogoImage}
        code={fullLogoCode}
        background="#fff"
        fileName="pattern-logo-full.svg"
        imageWidth={180}
      />
      <LogoAsset
        image={whiteLogoImage}
        code={whiteLogoCode}
        background={DEFAULT_THEME.colors.dark[6]}
        fileName="pattern-logo-full.svg"
        imageWidth={180}
      />
    </SimpleGrid>
  );
}
