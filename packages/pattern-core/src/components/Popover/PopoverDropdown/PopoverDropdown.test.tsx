import {
  createContextContainer,
  itSupportsSystemProps,
  itThrowsContextError,
  itRendersChildren,
} from '@pattern/tests';
import { PopoverDropdown, PopoverDropdownProps } from './PopoverDropdown';
import { Popover } from '../Popover';
import { POPOVER_ERRORS } from '../Popover.errors';

const defaultProps: PopoverDropdownProps = {};

const TestContainer = createContextContainer(PopoverDropdown, Popover, { opened: true });

describe('@pattern/core/PopoverDropdown', () => {
  itThrowsContextError(PopoverDropdown, defaultProps, POPOVER_ERRORS['popover-context']);
  itRendersChildren(TestContainer, defaultProps);

  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    displayName: '@pattern/core/PopoverDropdown',
  });
});
