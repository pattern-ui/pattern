import React, { useMemo } from 'react';
import { usePatternTheme } from '@pattern/core';
import CodeDemo from './CodeDemo/CodeDemo';
import Configurator from './Configurator/Configurator';

export { CodeDemo, Configurator };

type ConfiguratorProps = React.ComponentProps<typeof Configurator>;
type CodeDemoProps = React.ComponentProps<typeof CodeDemo>;

interface DemoProps {
  toggle?: boolean;
  demoProps?: CodeDemoProps;
  configuratorProps?: Omit<ConfiguratorProps, 'props' | 'codeTemplate' | 'component'>;
  data: PatternDemo;
}

export function Demo({ data: dataProp, demoProps, configuratorProps }: DemoProps) {
  const data: PatternCodeDemo | PatternConfiguratorDemo = useMemo(() => {
    if (typeof dataProp === 'function') {
      return {
        type: 'demo',
        component: dataProp,
      };
    }
    return dataProp;
  }, []);

  const theme = usePatternTheme();
  const background =
    typeof data.background === 'function' ? data.background(theme.colorScheme) : undefined;

  if (data.type === 'demo') {
    return (
      <CodeDemo
        language="tsx"
        code={data.code ?? data.component.code ?? null}
        demoBackground={background}
        {...data.demoProps}
        {...demoProps}
      >
        {data.wrapper ? (
          <data.wrapper>
            <data.component />
          </data.wrapper>
        ) : (
          <data.component />
        )}
      </CodeDemo>
    );
  }

  if (data.type === 'configurator') {
    return (
      <Configurator
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
        props={data.configurator}
        previewBackground={background}
        {...data.configuratorProps}
        {...configuratorProps}
      />
    );
  }

  return null;
}
