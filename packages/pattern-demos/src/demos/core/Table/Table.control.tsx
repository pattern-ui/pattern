import React from 'react';
import { Table, TableProps } from '@pattern/core';
import { elements } from './_data';

function Wrapper(props: TableProps) {
  return (
    <Table {...props}>
      <thead>
        <tr>
          <th>Element position</th>
          <th>Element name</th>
          <th>Symbol</th>
          <th>Atomic mass</th>
        </tr>
      </thead>
      <tbody>
        {elements.map((element) => (
          <tr key={element.name}>
            <td>{element.position}</td>
            <td>{element.name}</td>
            <td>{element.symbol}</td>
            <td>{element.mass}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

const codeTemplate = (props: string) => `
import { Table } from '@pattern/core';

export default function Demo() {
  return (
    <Table${props}>
      {/* {...rows} */}
    </Table>
  );
}
`;

export const control: PatternControlDemo = {
  type: 'control',
  component: Wrapper,
  codeTemplate,
  controls: [
    { name: 'striped', type: 'boolean', defaultValue: false },
    { name: 'highlightOnHover', type: 'boolean', defaultValue: false },
  ],
};
