import React, { useState } from 'react';
import { TransferList, TransferListData } from '@pattern/core';

const mockdata: TransferListData = [
  [
    { value: 'react', label: 'React', group: 'Frameworks' },
    { value: 'ng', label: 'Angular', group: 'Frameworks' },
    { value: 'next', label: 'Next.js', group: 'Frameworks' },
    { value: 'jq', label: 'jQuery', group: 'Frameworks' },
    { value: 'sv', label: 'Svelte', group: 'Libraries' },
    { value: 'dj', label: 'Django', group: 'Libraries' },
    { value: 'fl', label: 'Flask', group: 'Libraries' },
  ],
  [
    { value: 'blitz', label: 'Blitz.js', group: 'Frameworks' },
    { value: 'gatsby', label: 'Gatsby.js', group: 'Frameworks' },
    { value: 'vue', label: 'Vue', group: 'Frameworks' },
    { value: 'rw', label: 'Redwood', group: 'Libraries' },
    { value: 'np', label: 'NumPy', group: 'Libraries' },
  ],
];

export default function Demo() {
  const [data, setData] = useState<TransferListData>(mockdata);

  return (
    <TransferList
      value={data}
      onChange={setData}
      searchPlaceholder="Search..."
      nothingFound="Nothing here"
    />
  );
}
