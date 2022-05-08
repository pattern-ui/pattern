import { createStyles } from '@pattern-ui/core';

export default createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',

    '& + &': {
      marginTop: 5,
    },
  },

  icon: {
    marginRight: theme.spacing.sm,
    marginTop: 1,
  },

  code: {
    marginBottom: 0,
    cursor: 'pointer',
    paddingLeft: 0,
    marginLeft: 0,
  },

  copy: {
    ...theme.fn.focusStyles(),
    padding: 0,
    border: 0,
    appearance: 'none',
    backgroundColor: 'transparent',
    textAlign: 'left',
    display: 'block',
    width: '100%',
    flex: 1,
    overflowX: 'hidden',
    WebkitTapHighlightColor: 'transparent',
  },
}));