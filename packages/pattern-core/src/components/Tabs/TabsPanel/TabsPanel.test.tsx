import {
  itSupportsSystemProps,
  createContextContainer,
  itRendersChildren,
  itThrowsContextError,
} from '@pattern/tests';
import { TabsPanel, TabsPanelProps } from './TabsPanel';
import { TabsProvider } from '../TabsProvider';
import { TABS_ERRORS } from '../Tabs.errors';

const defaultProps: TabsPanelProps = {
  value: 'test',
  children: 'Test children',
};

const TestContainer = createContextContainer(TabsPanel, TabsProvider);

describe('@pattern/core/TabsPanel', () => {
  itThrowsContextError(TabsPanel, defaultProps, TABS_ERRORS['tabs-context']);
  itRendersChildren(TestContainer, defaultProps);
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@pattern/core/TabsPanel',
  });
});
