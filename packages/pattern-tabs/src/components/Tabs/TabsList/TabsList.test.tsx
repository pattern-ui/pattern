import {
  itSupportsSystemProps,
  createContextContainer,
  itRendersChildren,
  itThrowsContextError,
} from '@pattern-ui/tests';
import { TabsProvider } from '../TabsProvider';
import { TABS_ERRORS } from '../Tabs.errors';
import { TabsList, TabsListProps } from './TabsList';

const defaultProps: TabsListProps = {
  children: 'Test children',
};

const TestContainer = createContextContainer(TabsList, TabsProvider);

describe('@pattern-ui/core/TabsList', () => {
  itThrowsContextError(TabsList, defaultProps, TABS_ERRORS['tabs-context']);
  itRendersChildren(TestContainer, defaultProps);
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@pattern-ui/core/TabsList',
  });
});
