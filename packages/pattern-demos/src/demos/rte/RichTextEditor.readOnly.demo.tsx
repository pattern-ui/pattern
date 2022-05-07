import React, { useState } from 'react';
import { SSRWrapper } from './_SSRWrapper';

export const html = `
<p>This editor is <b>read only</b></p>
`;

export default function Demo(props: any) {
  const [value, onChange] = useState(html);
  return <SSRWrapper readOnly value={value} onChange={onChange} stickyOffset={60} {...props} />;
}
