import { createStyles, PatternNumberSize } from '@pattern/core';

interface PinInputStyles {
  size: PatternNumberSize;
}

const sizes = {
  xs: 28,
  sm: 32,
  md: 36,
  lg: 40,
  xl: 48,
};

export default createStyles((theme, { size }: PinInputStyles) => ({
  input: {
    width: theme.fn.size({ size, sizes }),
    height: theme.fn.size({ size, sizes }),
    textAlign: 'center',
    minHeight: 'auto',
    paddingRight: '0px !important',
    paddingLeft: '0px !important',

    '&::selection': {
      background: 'transparent',
    },
  },
}));
