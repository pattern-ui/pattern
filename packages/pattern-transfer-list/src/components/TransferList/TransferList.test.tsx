import { itSupportsSystemProps } from '@pattern-ui/tests';
import { TransferList, TransferListProps } from './TransferList';

const defaultProps: TransferListProps = {
  onChange: () => {},
  titles: ['test-1', 'test-2'],
  value: [
    [
      { value: 'react', label: 'React' },
      { value: 'ng', label: 'Angular' },
      { value: 'next', label: 'Next.js' },
    ],
    [
      { value: 'sv', label: 'Svelte' },
      { value: 'rw', label: 'Redwood' },
    ],
  ],
};

describe('@pattern-ui/core/TransferList', () => {
  itSupportsSystemProps({
    component: TransferList,
    props: defaultProps,
    displayName: '@pattern-ui/core/TransferList',
    refType: HTMLDivElement,
  });
});
