import { itSupportsSystemProps } from '@pattern-ui/tests';
import { Table, TableProps } from './Table';

const defaultProps: TableProps = {};

describe('@pattern-ui/core/Table', () => {
  itSupportsSystemProps({
    component: Table,
    props: defaultProps,
    displayName: '@pattern-ui/core/Table',
    refType: HTMLTableElement,
  });
});
