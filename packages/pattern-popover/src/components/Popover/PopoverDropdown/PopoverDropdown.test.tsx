import {
  createContextContainer,
  itSupportsSystemProps,
  itThrowsContextError,
  itRendersChildren,
} from '@pattern-ui/tests';
import { Popover } from '../Popover';
import { POPOVER_ERRORS } from '../Popover.errors';
import { PopoverDropdown, PopoverDropdownProps } from './PopoverDropdown';

const defaultProps: PopoverDropdownProps = {};

const TestContainer = createContextContainer(PopoverDropdown, Popover, { opened: true });

describe('@pattern-ui/core/PopoverDropdown', () => {
  itThrowsContextError(PopoverDropdown, defaultProps, POPOVER_ERRORS['popover-context']);
  itRendersChildren(TestContainer, defaultProps);

  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    displayName: '@pattern-ui/core/PopoverDropdown',
  });
});
