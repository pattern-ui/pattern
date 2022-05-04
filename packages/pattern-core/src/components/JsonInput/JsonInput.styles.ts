import { createStyles, PatternSize } from '@pattern/styles';

export interface JsonInputStylesParams {
  size: PatternSize;
}

export default createStyles((theme, { size }: JsonInputStylesParams) => ({
  input: {
    fontFamily: theme.fontFamilyMonospace,
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }) - 2,
  },
}));
