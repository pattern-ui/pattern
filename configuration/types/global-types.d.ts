type PatternDemoControlType =
  | 'boolean'
  | 'color'
  | 'select'
  | 'string'
  | 'size'
  | 'number'
  | 'segmented';

interface PatternDemoControlProps {
  type: PatternDemoControlType;
  name: string;
  label?: string;
  initialValue?: any;
  defaultValue?: any;
  capitalize?: boolean;
  data?: { label: string; value: string }[];
  min?: number;
  max?: number;
  step?: number;
}

type PatternDemoBaseComponent = React.FC & {
  code?: string;
};

interface PatternDemoBase {
  component?: PatternDemoBaseComponent;
  wrapper?: React.FC;
  code?: string;
  background?: (colorScheme: 'light' | 'dark') => string;
}

interface PatternCodeDemo extends PatternDemoBase {
  type: 'demo';
  demoProps?: {
    spacing?: boolean;
    demoBackground?: string;
    toggle?: boolean;
    githubLink?: string;
    inline?: boolean;
  };
}

interface PatternConfiguratorDemo extends PatternDemoBase {
  type: 'configurator';
  codeTemplate(props: string, children?: string): string;
  configurator?: PatternDemoControlProps[];
  configuratorProps?: {
    previewBackground?: string;
    multiline?: boolean | number;
    includeCode?: boolean;
    filter?: string[];
    center?: boolean;
  };
}

type PatternDemo = PatternCodeDemo | PatternConfiguratorDemo | PatternDemoBaseComponent;
