import React from 'react';
import { usePatternTheme } from '@pattern-ui/core';
import { RichTextEditorDemos } from '@pattern-ui/demos';

export function RichTextDemo() {
  const theme = usePatternTheme();
  const Component = RichTextEditorDemos.usage as any;
  return (
    <Component
      style={{
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        borderColor: 'transparent',
        boxShadow: theme.shadows.md,
      }}
      controls={[
        ['bold', 'italic', 'underline', 'strike', 'clean'],
        ['h1', 'h2', 'h3', 'h4'],
        ['unorderedList', 'orderedList'],
        ['link', 'image', 'video', 'blockquote'],
        ['alignLeft', 'alignCenter', 'alignRight'],
      ]}
    />
  );
}
