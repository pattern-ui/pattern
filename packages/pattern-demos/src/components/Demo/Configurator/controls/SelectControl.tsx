import React from 'react';
import { NativeSelect } from '@pattern-ui/core';
import { upperFirst } from '@pattern-ui/hooks';
import { InputWrapper } from '@pattern-ui/input-wrapper';

interface SelectControlProps {
  value: string;
  label: string;
  capitalize: boolean;

  onChange(value: string): void;

  data: { label: string; value: string }[];
}

export function SelectControl({
  value,
  label,
  onChange,
  data,
  capitalize: capitalizeItems = true,
  ...others
}: SelectControlProps) {
  return (
    <InputWrapper label={upperFirst(label)} {...others}>
      <NativeSelect
        data={data.map((item) => ({
          value: item.value,
          label: capitalizeItems ? upperFirst(item.label) : item.label,
        }))}
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
      />
    </InputWrapper>
  );
}

SelectControl.initialValue = '';
