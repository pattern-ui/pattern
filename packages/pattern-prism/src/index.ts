import { ForwardRefWithStaticComponents } from '@pattern-ui/styles';
import { Tabs } from '@pattern-ui/tabs';
import { PrismTabs, PrismPanel } from './PrismTabs/PrismTabs';
import { Prism, PrismProps } from './Prism/Prism';

export type { PrismProps, PrismStylesNames } from './Prism/Prism';
export type { PrismStylesParams } from './Prism/Prism.styles';

type PrismComponent = ForwardRefWithStaticComponents<
  PrismProps,
  {
    Tabs: typeof PrismTabs;
    TabsList: typeof Tabs.List;
    Tab: typeof Tabs.Tab;
    Panel: typeof PrismPanel;
  }
>;

const PrismExport: PrismComponent = Prism as any;

PrismExport.Tabs = PrismTabs;
PrismExport.Tab = Tabs.Tab;
PrismExport.TabsList = Tabs.List;
PrismExport.Panel = PrismPanel;

export { PrismExport as Prism };
