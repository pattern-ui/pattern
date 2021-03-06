import {
  itSupportsSystemProps,
  itSupportsInputProps,
  itSupportsFocusEvents,
} from '@pattern-ui/tests';
import { DatePickerBase, DatePickerBaseProps } from './DatePickerBase';

const defaultProps: DatePickerBaseProps = {
  placeholder: 'test-placeholder',
  dropdownOpened: true,
  setDropdownOpened: () => {},
  onClear: () => {},
  transitionDuration: 0,
};

describe('@pattern-ui/dates/DatePickerBase', () => {
  itSupportsInputProps(DatePickerBase, defaultProps, 'DatePickerBase');
  itSupportsFocusEvents(DatePickerBase, defaultProps, 'input');
  itSupportsSystemProps({
    component: DatePickerBase,
    props: defaultProps,
    displayName: '@pattern-ui/dates/DatePickerBase',
    excludeOthers: true,
    refType: HTMLInputElement,
  });
});
