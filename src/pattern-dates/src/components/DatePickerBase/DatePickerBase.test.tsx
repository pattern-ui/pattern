import { itSupportsSystemProps, itSupportsInputProps, itSupportsFocusEvents } from '@pattern/tests';
import { DatePickerBase, DatePickerBaseProps } from './DatePickerBase';

const defaultProps: DatePickerBaseProps = {
  label: 'test-label',
  placeholder: 'test-placeholder',
  dropdownOpened: true,
  setDropdownOpened: () => {},
  onClear: () => {},
  transitionDuration: 0,
};

describe('@pattern/dates/DatePickerBase', () => {
  itSupportsInputProps(DatePickerBase, defaultProps, 'DatePickerBase');
  itSupportsFocusEvents(DatePickerBase, defaultProps, 'input');
  itSupportsSystemProps({
    component: DatePickerBase,
    props: defaultProps,
    displayName: '@pattern/dates/DatePickerBase',
    excludeOthers: true,
    refType: HTMLInputElement,
  });
});
