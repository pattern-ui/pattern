import React from 'react';
import { Switch } from '@pattern-ui/core';
import { upperFirst } from '@pattern-ui/hooks';

interface BooleanControlProps {
  value: boolean;
  label: string;
  onChange(value: boolean): void;
}

const splitCamelCase = (string: string) => {
  const splitted = string.replace(/([a-z0-9])([A-Z])/g, '$1 $2').toLowerCase();
  return upperFirst(splitted);
};

export function BooleanControl({ value, label, onChange, ...others }: BooleanControlProps) {
  return (
    <Switch
      {...others}
      size="sm"
      label={splitCamelCase(label)}
      checked={value}
      onChange={(event) => onChange(event.currentTarget.checked)}
    />
  );
}

BooleanControl.initialValue = false;
