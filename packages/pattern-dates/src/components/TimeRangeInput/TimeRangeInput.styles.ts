import { INPUT_SIZES } from '@pattern-ui/input';
import { createStyles, PatternSize } from '@pattern-ui/styles';

export interface TimeRangeInputStylesParams {
  size: PatternSize;
}

export default createStyles((theme, { size }: TimeRangeInputStylesParams) => ({
  timeField: {},

  disabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  inputWrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    // -2 for border offset
    height: theme.fn.size({ size, sizes: INPUT_SIZES }) - 2,
  },

  separator: {
    paddingLeft: theme.fn.size({ size, sizes: theme.spacing }) / 2,
    paddingRight: theme.fn.size({ size, sizes: theme.spacing }) / 2,
    lineHeight: 1,
  },
}));
