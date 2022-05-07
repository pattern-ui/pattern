import { createStyles, INPUT_SIZES, PatternSize } from '@pattern-ui/core';

export interface TimeInputStylesParams {
  size: PatternSize;
}

export default createStyles((theme, { size }: TimeInputStylesParams) => ({
  timeInput: {},

  disabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  controls: {
    display: 'flex',
    alignItems: 'center',
    // -2 for border offset
    height: theme.fn.size({ size, sizes: INPUT_SIZES }) - 2,
  },
}));
