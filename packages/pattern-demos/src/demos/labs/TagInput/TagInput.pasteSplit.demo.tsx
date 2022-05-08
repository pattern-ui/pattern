import React from 'react';
import { TagInput } from '@pattern-ui/labs';

const PasteSplit = (data: string): string[] => {
  const separators = [','];
  return data.split(new RegExp(separators.join('|'))).map((d) => d.trim());
};

export default function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <TagInput
        label="Technologies that you're interested in"
        placeholder="Enter manually or paste comma separated values"
        pasteSplit={PasteSplit}
      />
    </div>
  );
}
