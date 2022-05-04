import { createStyles } from '@pattern/styles';
import { TabsStylesParams } from '../Tabs.types';

export default createStyles((_theme, { orientation }: TabsStylesParams) => ({
  panel: {
    flex: orientation === 'vertical' ? 1 : undefined,
  },
}));
