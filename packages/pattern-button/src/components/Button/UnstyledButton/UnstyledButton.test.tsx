import {
  itRendersChildren,
  itSupportsFocusEvents,
  itSupportsSystemProps,
  itIsPolymorphic,
} from '@pattern-ui/tests';
import { UnstyledButton, UnstyledButtonProps } from './UnstyledButton';

const defaultProps: UnstyledButtonProps<'button'> = {};

describe('@pattern-ui/core/UnstyledButton', () => {
  itRendersChildren(UnstyledButton, defaultProps);
  itIsPolymorphic(UnstyledButton, defaultProps);
  itSupportsFocusEvents(UnstyledButton, defaultProps, 'button');
  itSupportsSystemProps({
    component: UnstyledButton,
    props: defaultProps,
    displayName: '@pattern-ui/core/UnstyledButton',
    refType: HTMLButtonElement,
  });
});
