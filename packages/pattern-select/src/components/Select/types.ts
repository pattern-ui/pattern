import type { InputStylesNames, InputBaseProps } from '@pattern-ui/input';
import type { SelectDropdownStylesNames } from './SelectDropdown/SelectDropdown';
import type { SelectItemsStylesNames } from './SelectItems/SelectItems';

export interface SelectItem {
  value: string;
  label?: string;
  disabled?: boolean;
  group?: string;
  [key: string]: any;
}

export type BaseSelectStylesNames =
  | InputStylesNames
  | SelectItemsStylesNames
  | SelectDropdownStylesNames;

export type BaseSelectProps = InputBaseProps &
  Omit<React.ComponentPropsWithoutRef<'input'>, 'value' | 'onChange' | 'size' | 'defaultValue'>;
