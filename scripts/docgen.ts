import path from 'path';
import fs from 'fs-extra';
import { DeclarationPath } from './docgen/get-declarations-list';
import { generateDeclarations } from './docgen/generate-declarations';

const EXTRA_FILES_PATHS = [
  // Tabs
  '../packages/pattern-tabs/src/components/Tabs/TabsList/TabsList.tsx',
  '../packages/pattern-tabs/src/components/Tabs/Tab/Tab.tsx',
  '../packages/pattern-tabs/src/components/Tabs/TabsPanel/TabsPanel.tsx',
  '../packages/pattern-tabs/src/components/Tabs/Tabs.tsx',

  // Accordion
  '../packages/pattern-accordion/src/components/Accordion/AccordionControl/AccordionControl.tsx',
  '../packages/pattern-accordion/src/components/Accordion/AccordionItem/AccordionItem.tsx',
  '../packages/pattern-accordion/src/components/Accordion/AccordionPanel/AccordionPanel.tsx',

  // Tooltip
  '../packages/pattern-tooltip/src/components/Tooltip/TooltipFloating/TooltipFloating.tsx',
  '../packages/pattern-tooltip/src/components/Tooltip/TooltipGroup/TooltipGroup.tsx',

  // Popover
  '../packages/pattern-popover/src/components/Popover/PopoverTarget/PopoverTarget.tsx',
  '../packages/pattern-popover/src/components/Popover/PopoverDropdown/PopoverDropdown.tsx',

  // Other
  '../packages/pattern-notifications/src/NotificationsProvider/NotificationsProvider.tsx',
  '../packages/pattern-menu/src/components/Menu/MenuItem/MenuItem.tsx',
  '../packages/pattern-menu/src/components/Menu/MenuLabel/MenuLabel.tsx',
  '../packages/pattern-radio-group/src/components/RadioGroup/Radio/Radio.tsx',
  '../packages/pattern-chips/src/components/Chips/Chip/Chip.tsx',
  '../packages/pattern-timeline/src/components/Timeline/TimelineItem/TimelineItem.tsx',
  '../packages/pattern-slider/src/components/Slider/Slider/Slider.tsx',
  '../packages/pattern-slider/src/components/Slider/RangeSlider/RangeSlider.tsx',
  '../packages/pattern-stepper/src/components/Stepper/Step/Step.tsx',
  '../packages/pattern-avatar/src/components/Avatar/AvatarsGroup/AvatarsGroup.tsx',
  '../packages/pattern-app-shell/src/components/AppShell/Navbar/Navbar.tsx',
  '../packages/pattern-app-shell/src/components/AppShell/Header/Header.tsx',
  '../packages/pattern-app-shell/src/components/AppShell/Footer/Footer.tsx',
  '../packages/pattern-app-shell/src/components/AppShell/Aside/Aside.tsx',
  '../packages/pattern-grid/src/components/Grid/Col/Col.tsx',
  '../packages/pattern-prism/src/Prism/Prism.tsx',
  '../packages/pattern-spotlight/src/SpotlightProvider.tsx',
  '../packages/pattern-modals/src/ModalsProvider.tsx',
  '../packages/pattern-rte/src/components/RichTextEditor/RichTextEditor.tsx',
];

const EXCLUDES = ['@pattern-ui/core'];

const packages = fs.readdirSync('./packages');
const uiPackages = packages.filter((name) => {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const pkg = require(path.resolve('./packages', name, 'package.json'));
  return pkg.keywords?.includes('ui-kit') && !EXCLUDES.includes(pkg.name);
});

const PATHS: DeclarationPath[] = [
  ...uiPackages.map<DeclarationPath>((it) => ({
    type: 'package',
    path: path.join(__dirname, `../packages/${it}/src`),
  })),
  ...EXTRA_FILES_PATHS.map((filePath) => ({
    type: 'file' as const,
    path: path.join(__dirname, filePath),
  })),
];

fs.ensureDirSync(path.join(__dirname, '../docs/.docgen'));

fs.writeJSONSync(path.join(__dirname, '../docs/.docgen/docgen.json'), generateDeclarations(PATHS), {
  spaces: 2,
});
