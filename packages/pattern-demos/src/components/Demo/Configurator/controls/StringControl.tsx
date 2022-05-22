import React from 'react';
import { TextInput } from '@pattern-ui/core';
import { upperFirst } from '@pattern-ui/hooks';
import { InputWrapper } from '@pattern-ui/input-wrapper';

interface StringControlProps {
  value: string;
  label: string;
  onChange(value: string): void;
}

export function StringControl({ value, label, onChange, ...others }: StringControlProps) {
  return (
    <InputWrapper label={upperFirst(label)}>
      <TextInput
        {...others}
        placeholder={upperFirst(label)}
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
      />
    </InputWrapper>
  );
}

StringControl.initialValue = '';
