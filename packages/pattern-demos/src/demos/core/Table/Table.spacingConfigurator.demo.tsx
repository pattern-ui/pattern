import React from 'react';
import { Table, TableProps } from '@pattern/core';
import { elements } from './_data';

function Wrapper(props: TableProps) {
  return (
    <Table {...props}>
      <thead>
        <tr>
          <th>Position</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Mass</th>
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

function Demo() {
  return (
    <Table${props}>
      {/* {...rows} */}
    </Table>
  );
}
`;

export const spacingConfigurator: PatternDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'horizontalSpacing', type: 'size', defaultValue: 'xs', initialValue: 'xs' },
    { name: 'verticalSpacing', type: 'size', initialValue: 'xs' },
    { name: 'fontSize', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
  ],
};
