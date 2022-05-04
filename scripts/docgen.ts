import path from 'path';
import fs from 'fs-extra';
import { DeclarationPath } from './docgen/get-declarations-list';
import { generateDeclarations } from './docgen/generate-declarations';

const EXTRA_FILES_PATHS = [
  // Tabs
  '../packages/pattern-core/src/components/Tabs/TabsList/TabsList.tsx',
  '../packages/pattern-core/src/components/Tabs/Tab/Tab.tsx',
  '../packages/pattern-core/src/components/Tabs/TabsPanel/TabsPanel.tsx',
  '../packages/pattern-core/src/components/Tabs/Tabs.tsx',

  // Accordion
  '../packages/pattern-core/src/components/Accordion/AccordionControl/AccordionControl.tsx',
  '../packages/pattern-core/src/components/Accordion/AccordionItem/AccordionItem.tsx',
  '../packages/pattern-core/src/components/Accordion/AccordionPanel/AccordionPanel.tsx',

  // Tooltip
  '../packages/pattern-core/src/components/Tooltip/TooltipFloating/TooltipFloating.tsx',
  '../packages/pattern-core/src/components/Tooltip/TooltipGroup/TooltipGroup.tsx',

  // Popover
  '../packages/pattern-core/src/components/Popover/PopoverTarget/PopoverTarget.tsx',
  '../packages/pattern-core/src/components/Popover/PopoverDropdown/PopoverDropdown.tsx',

  // Other
  '../packages/pattern-notifications/src/NotificationsProvider/NotificationsProvider.tsx',
  '../packages/pattern-core/src/components/Menu/MenuItem/MenuItem.tsx',
  '../packages/pattern-core/src/components/Menu/MenuLabel/MenuLabel.tsx',
  '../packages/pattern-core/src/components/RadioGroup/Radio/Radio.tsx',
  '../packages/pattern-core/src/components/Chips/Chip/Chip.tsx',
  '../packages/pattern-core/src/components/Timeline/TimelineItem/TimelineItem.tsx',
  '../packages/pattern-core/src/components/Slider/Slider/Slider.tsx',
  '../packages/pattern-core/src/components/Slider/RangeSlider/RangeSlider.tsx',
  '../packages/pattern-core/src/components/Stepper/Step/Step.tsx',
  '../packages/pattern-core/src/components/Avatar/AvatarsGroup/AvatarsGroup.tsx',
  '../packages/pattern-core/src/components/AppShell/Navbar/Navbar.tsx',
  '../packages/pattern-core/src/components/AppShell/Header/Header.tsx',
  '../packages/pattern-core/src/components/AppShell/Footer/Footer.tsx',
  '../packages/pattern-core/src/components/AppShell/Aside/Aside.tsx',
  '../packages/pattern-core/src/components/Grid/Col/Col.tsx',
  '../packages/pattern-prism/src/Prism/Prism.tsx',
  '../packages/pattern-spotlight/src/SpotlightProvider.tsx',
  '../packages/pattern-modals/src/ModalsProvider.tsx',
  '../packages/pattern-rte/src/components/RichTextEditor/RichTextEditor.tsx',
];

const PATHS: DeclarationPath[] = [
  { type: 'package', path: path.join(__dirname, '../packages/pattern-core/src/components') },
  { type: 'package', path: path.join(__dirname, '../packages/pattern-dates/src/components') },
  { type: 'package', path: path.join(__dirname, '../packages/pattern-dropzone/src') },
  { type: 'package', path: path.join(__dirname, '../packages/pattern-labs/src') },
  ...EXTRA_FILES_PATHS.map((filePath) => ({
    type: 'file' as const,
    path: path.join(__dirname, filePath),
  })),
];

fs.ensureDirSync(path.join(__dirname, '../docs/.docgen'));

fs.writeJSONSync(path.join(__dirname, '../docs/.docgen/docgen.json'), generateDeclarations(PATHS), {
  spaces: 2,
});
