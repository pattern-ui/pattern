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
  imports?: Array<{
    raw: string,
    name: string,
    content: string;
  }>;
};

interface PatternDemoBase {
  component?: PatternDemoBaseComponent;
  wrapper?: React.FC;
  code?: string;
  background?: (colorScheme: 'light' | 'dark') => string;
}

interface PatternCodeDemo extends PatternDemoBase {
  type: 'code',
  demoProps?: {
    spacing?: boolean;
    demoBackground?: string;
    toggle?: boolean;
    githubLink?: string;
    inline?: boolean;
  };
}

interface PatternControlDemo extends PatternDemoBase {
  type: 'control',
  codeTemplate(props: string, children?: string): string;
  controls?: PatternDemoControlProps[];
  demoProps?: {
    previewBackground?: string;
    multiline?: boolean | number;
    includeCode?: boolean;
    filter?: string[];
    center?: boolean;
  };
}

type PatternDemo = PatternCodeDemo | PatternControlDemo | PatternDemoBaseComponent;
