import { createStyles, PatternShadow, PatternNumberSize } from '@pattern-ui/styles';

export interface PopoverStylesParams {
  radius?: PatternNumberSize;
  shadow?: PatternShadow;
}

export default createStyles((theme, { radius, shadow }: PopoverStylesParams) => ({
  root: {
    position: 'absolute',
    backgroundColor: theme.white,
    background: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
    border: `1px solid ${theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]}`,
    padding: `${theme.spacing.sm}px ${theme.spacing.md}px`,
    boxShadow: theme.shadows[shadow] || shadow || 'none',
    borderRadius: theme.fn.radius(radius),

    '&:focus': {
      outline: 0,
    },
  },

  arrow: {
    backgroundColor: 'inherit',
    border: `1px solid ${theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]}`,
    zIndex: 1,
  },
}));
