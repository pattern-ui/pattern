import React, { useState } from 'react';
import { SSRWrapper } from './_SSRWrapper';

const initialValue =
  '<p>Your initial <b>html value</b> or an empty string to init editor without value</p>';

export default function Demo() {
  const [value, onChange] = useState(initialValue);
  return <SSRWrapper value={value} onChange={onChange} />;
}
