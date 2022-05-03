import { itSupportsSystemProps } from '@pattern/tests';
import { Table, TableProps } from './Table';

const defaultProps: TableProps = {};

describe('@pattern/core/Table', () => {
  itSupportsSystemProps({
    component: Table,
    props: defaultProps,
    displayName: '@pattern/core/Table',
    refType: HTMLTableElement,
  });
});
