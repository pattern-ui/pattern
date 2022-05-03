import path from 'path';
import fs from 'fs-extra';
import { DeclarationPath } from './docgen/get-declarations-list';
import { generateDeclarations } from './docgen/generate-declarations';

const EXTRA_FILES_PATHS = [
  // Tabs
  '../src/pattern-core/src/components/Tabs/TabsList/TabsList.tsx',
  '../src/pattern-core/src/components/Tabs/Tab/Tab.tsx',
  '../src/pattern-core/src/components/Tabs/TabsPanel/TabsPanel.tsx',
  '../src/pattern-core/src/components/Tabs/Tabs.tsx',

  // Accordion
  '../src/pattern-core/src/components/Accordion/AccordionControl/AccordionControl.tsx',
  '../src/pattern-core/src/components/Accordion/AccordionItem/AccordionItem.tsx',
  '../src/pattern-core/src/components/Accordion/AccordionPanel/AccordionPanel.tsx',

  // Tooltip
  '../src/pattern-core/src/components/Tooltip/TooltipFloating/TooltipFloating.tsx',
  '../src/pattern-core/src/components/Tooltip/TooltipGroup/TooltipGroup.tsx',

  // Popover
  '../src/pattern-core/src/components/Popover/PopoverTarget/PopoverTarget.tsx',
  '../src/pattern-core/src/components/Popover/PopoverDropdown/PopoverDropdown.tsx',

  // Other
  '../src/pattern-notifications/src/NotificationsProvider/NotificationsProvider.tsx',
  '../src/pattern-core/src/components/Menu/MenuItem/MenuItem.tsx',
  '../src/pattern-core/src/components/Menu/MenuLabel/MenuLabel.tsx',
  '../src/pattern-core/src/components/RadioGroup/Radio/Radio.tsx',
  '../src/pattern-core/src/components/Chips/Chip/Chip.tsx',
  '../src/pattern-core/src/components/Timeline/TimelineItem/TimelineItem.tsx',
  '../src/pattern-core/src/components/Slider/Slider/Slider.tsx',
  '../src/pattern-core/src/components/Slider/RangeSlider/RangeSlider.tsx',
  '../src/pattern-core/src/components/Stepper/Step/Step.tsx',
  '../src/pattern-core/src/components/Avatar/AvatarsGroup/AvatarsGroup.tsx',
  '../src/pattern-core/src/components/AppShell/Navbar/Navbar.tsx',
  '../src/pattern-core/src/components/AppShell/Header/Header.tsx',
  '../src/pattern-core/src/components/AppShell/Footer/Footer.tsx',
  '../src/pattern-core/src/components/AppShell/Aside/Aside.tsx',
  '../src/pattern-core/src/components/Grid/Col/Col.tsx',
  '../src/pattern-prism/src/Prism/Prism.tsx',
  '../src/pattern-spotlight/src/SpotlightProvider.tsx',
  '../src/pattern-modals/src/ModalsProvider.tsx',
  '../src/pattern-rte/src/components/RichTextEditor/RichTextEditor.tsx',
];

const PATHS: DeclarationPath[] = [
  { type: 'package', path: path.join(__dirname, '../src/pattern-core/src/components') },
  { type: 'package', path: path.join(__dirname, '../src/pattern-dates/src/components') },
  { type: 'package', path: path.join(__dirname, '../src/pattern-dropzone/src') },
  { type: 'package', path: path.join(__dirname, '../src/pattern-labs/src') },
  ...EXTRA_FILES_PATHS.map((filePath) => ({
    type: 'file' as const,
    path: path.join(__dirname, filePath),
  })),
];

fs.ensureDirSync(path.join(__dirname, '../docs/.docgen'));

fs.writeJSONSync(path.join(__dirname, '../docs/.docgen/docgen.json'), generateDeclarations(PATHS), {
  spaces: 2,
});
