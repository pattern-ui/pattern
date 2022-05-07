import React from 'react';
import type { RichTextEditorProps } from '@pattern-ui/rte';

export function SSRWrapper(props: RichTextEditorProps) {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line import/extensions, global-require
    const { RichTextEditor } = require('@pattern-ui/rte');
    return <RichTextEditor {...props} />;
  }

  return null;
}
