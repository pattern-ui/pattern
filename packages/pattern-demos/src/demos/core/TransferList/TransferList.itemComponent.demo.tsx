import React, { useState } from 'react';
import {
  Checkbox,
  Group,
  Avatar,
  Text,
  TransferList,
  TransferListData,
  TransferListItemComponent,
  TransferListItemComponentProps,
} from '@pattern/core';
import { charactersList } from './_mockdata';

const initialValues: TransferListData = [
  charactersList.map((item, index) => ({ ...item, value: index.toString() })),
  [],
];

const ItemComponent: TransferListItemComponent = ({
  data,
  selected,
}: TransferListItemComponentProps) => (
  <Group noWrap>
    <Avatar src={data.image} radius="xl" size="lg" />
    <div style={{ flex: 1 }}>
      <Text size="sm" weight={500}>
        {data.label}
      </Text>
      <Text size="xs" color="dimmed" weight={400}>
        {data.description}
      </Text>
    </div>
    <Checkbox checked={selected} onChange={() => {}} tabIndex={-1} sx={{ pointerEvents: 'none' }} />
  </Group>
);

export default function Demo() {
  const [data, setData] = useState<TransferListData>(initialValues);
  return (
    <TransferList
      value={data}
      onChange={setData}
      searchPlaceholder="Search employees..."
      nothingFound="No one here"
      titles={['Employees to hire', 'Employees to fire']}
      listHeight={300}
      breakpoint="sm"
      itemComponent={ItemComponent}
      filter={(query, item) =>
        item.label.toLowerCase().includes(query.toLowerCase().trim()) ||
        item.description.toLowerCase().includes(query.toLowerCase().trim())
      }
    />
  );
}
