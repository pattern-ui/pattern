import { createStyles } from '@pattern/core';

export default createStyles((theme) => ({
  link: {
    ...theme.fn.focusStyles(),
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));
