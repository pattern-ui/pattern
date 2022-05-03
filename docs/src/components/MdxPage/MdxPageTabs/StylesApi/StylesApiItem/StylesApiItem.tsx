import React from 'react';
import { Table, Title } from '@pattern/core';
import * as STYLES_API from '@pattern/styles-api';
import useStyles from './StylesApiItem.styles';

interface StylesApiItemProps {
  component: string;
}

export function StylesApiItem({ component }: StylesApiItemProps) {
  const { classes } = useStyles();
  const COMPONENT_STYLES = STYLES_API[component];

  if (!COMPONENT_STYLES || typeof COMPONENT_STYLES !== 'object') {
    return null;
  }

  const CLASS_NAMES = Object.keys(COMPONENT_STYLES);
  const rows = CLASS_NAMES.map((name) => (
    <tr key={name}>
      <td>{name}</td>
      <td>{`.pattern-${component}-${name}`}</td>
      <td>{COMPONENT_STYLES[name]}</td>
    </tr>
  ));

  return (
    <>
      <Title order={3} className={classes.title}>
        {component} component Styles API
      </Title>

      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Static selector</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  );
}
