import { createStyles, PatternSize } from '@pattern-ui/styles';
import { INPUT_SIZES } from '../Input';

export interface MultiSelectStylesParams {
  size: PatternSize;
  invalid: boolean;
}

export const MARGIN_LEFTS = {
  xs: -5,
  sm: -5,
  md: -6,
  lg: -6,
  xl: -7,
};

export const VALUE_MARGINS = {
  xs: 3,
  sm: 5,
  md: 7,
  lg: 9,
  xl: 11,
};

export const PADDINGS = {
  xs: 3,
  sm: 5,
  md: 7,
  lg: 9,
  xl: 11,
};

export default createStyles((theme, { size, invalid }: MultiSelectStylesParams) => ({
  wrapper: {
    position: 'relative',
  },

  values: {
    minHeight: theme.fn.size({ size, sizes: INPUT_SIZES }) - 2,
    display: 'flex',
    // alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft: theme.fn.size({ size, sizes: MARGIN_LEFTS }),
    paddingTop: theme.fn.size({ size, sizes: PADDINGS }),
    boxSizing: 'border-box',
  },

  value: {
    margin: theme.fn.size({ size, sizes: VALUE_MARGINS }),
    marginTop: 0,
    marginLeft: 0,
  },

  searchInput: {
    flex: 1,
    minWidth: 60,
    backgroundColor: 'transparent',
    border: 0,
    outline: 0,
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
    padding: 0,
    margin: 0,
    marginTop: -theme.fn.size({ size, sizes: VALUE_MARGINS }),
    marginLeft: theme.fn.size({ size, sizes: VALUE_MARGINS }),
    appearance: 'none',
    color: 'inherit',

    '&::placeholder': {
      color: invalid
        ? theme.colors.red[theme.colorScheme === 'dark' ? 6 : 7]
        : theme.colorScheme === 'dark'
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
    },

    '&:disabled': {
      cursor: 'not-allowed',
    },
  },

  searchInputEmpty: {
    width: '100%',
  },

  searchInputInputHidden: {
    width: 0,
    height: 0,
    margin: 0,
    overflow: 'hidden',
  },

  searchInputPointer: {
    cursor: 'pointer',

    '&:disabled': {
      cursor: 'not-allowed',
    },
  },

  input: {
    cursor: 'pointer',

    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
}));
