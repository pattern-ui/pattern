import React from 'react';
import { usePatternTheme } from '@pattern-ui/core';
import CodeDemo from './CodeDemo/CodeDemo';
import CodeConfigurator from './Configurator/CodeConfigurator';

export { CodeConfigurator };

type ConfiguratorProps = React.ComponentProps<typeof CodeConfigurator>;
type CodeDemoProps = React.ComponentProps<typeof CodeDemo>;

interface ControlDemoProps {
  toggle?: boolean;
  demoProps?: CodeDemoProps;
  configuratorProps?: Omit<ConfiguratorProps, 'props' | 'codeTemplate' | 'component'>;
  data: PatternControlDemo;
}

export function ControlDemo({ data, configuratorProps }: ControlDemoProps) {
  const theme = usePatternTheme();
  const background = typeof data.background === 'function'
    ? data.background(theme.colorScheme)
    : undefined;

  return (
    <CodeConfigurator
      component={(props: any) =>
        data.wrapper ? (
          <data.wrapper>
            <data.component {...props} />
          </data.wrapper>
        ) : (
          <data.component {...props} />
        )
      }
      codeTemplate={data.codeTemplate}
      props={data.controls}
      previewBackground={background}
      {...data.demoProps}
      {...configuratorProps}
    />
  );
}
