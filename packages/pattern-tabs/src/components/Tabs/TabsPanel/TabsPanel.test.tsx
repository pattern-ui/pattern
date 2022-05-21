import {
  itSupportsSystemProps,
  createContextContainer,
  itRendersChildren,
  itThrowsContextError,
} from '@pattern-ui/tests';
import { TabsProvider } from '../TabsProvider';
import { TABS_ERRORS } from '../Tabs.errors';
import { TabsPanel, TabsPanelProps } from './TabsPanel';

const defaultProps: TabsPanelProps = {
  value: 'test',
  children: 'Test children',
};

const TestContainer = createContextContainer(TabsPanel, TabsProvider);

describe('@pattern-ui/core/TabsPanel', () => {
  itThrowsContextError(TabsPanel, defaultProps, TABS_ERRORS['tabs-context']);
  itRendersChildren(TestContainer, defaultProps);
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@pattern-ui/core/TabsPanel',
  });
});
