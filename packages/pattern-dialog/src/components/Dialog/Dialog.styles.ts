import { createStyles, PatternNumberSize } from '@pattern-ui/styles';

export interface DialogStylesParams {
  size: PatternNumberSize;
}

const sizes = {
  xs: 160,
  sm: 200,
  md: 340,
  lg: 400,
  xl: 500,
};

export default createStyles((theme, { size }: DialogStylesParams) => ({
  root: {
    ...theme.fn.fontStyles(),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    position: 'relative',
    width: theme.fn.size({ size, sizes }),
    maxWidth: '100%',
    minHeight: 50,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  closeButton: {
    position: 'absolute',
    top: theme.spacing.md / 2,
    right: theme.spacing.md / 2,
  },
}));
