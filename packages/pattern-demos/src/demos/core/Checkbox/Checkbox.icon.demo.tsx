import React from 'react';
import { Biohazard, Radioactive } from 'tabler-icons-react';
import { Checkbox, CheckboxProps } from '@pattern-ui/core';

const CheckboxIcon: CheckboxProps['icon'] = ({
  indeterminate,
  className,
}: React.ComponentProps<CheckboxProps['icon']>) =>
  indeterminate ? <Radioactive className={className} /> : <Biohazard className={className} />;

export default function Demo() {
  return (
    <>
      <Checkbox icon={CheckboxIcon} label="Custom icon" defaultChecked />
      <Checkbox icon={CheckboxIcon} label="Custom icon: indeterminate" indeterminate mt="sm" />
    </>
  );
}
