import React from 'react';
import { TextInput } from '@pattern-ui/core';
import { upperFirst } from '@pattern-ui/hooks';

interface StringControlProps {
  value: string;
  label: string;
  onChange(value: string): void;
}

export function StringControl({ value, label, onChange, ...others }: StringControlProps) {
  return (
    <TextInput
      {...others}
      label={upperFirst(label)}
      placeholder={upperFirst(label)}
      value={value}
      onChange={(event) => onChange(event.currentTarget.value)}
    />
  );
}

StringControl.initialValue = '';
