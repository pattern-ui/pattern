import { JsonInputStylesNames } from '@pattern-ui/json-input';
import { Input } from './Input.styles-api';
import { InputWrapper } from './InputWrapper.styles-api';

export const JsonInput: Record<JsonInputStylesNames, string> = {
  ...Input,
  ...InputWrapper,
};
