import React from 'react';
import { Checkbox, Group } from '@pattern/core';

export default function Demo() {
  return (
    <Group direction="column">
      <Checkbox checked={false} label="Default checkbox" />
      <Checkbox checked={false} indeterminate label="Indeterminate checkbox" />
      <Checkbox checked label="Checked checkbox" />
      <Checkbox disabled label="Disabled checkbox" />
      <Checkbox disabled checked label="Disabled checked checkbox" />
      <Checkbox disabled indeterminate label="Disabled indeterminate checkbox" />
    </Group>
  );
}
