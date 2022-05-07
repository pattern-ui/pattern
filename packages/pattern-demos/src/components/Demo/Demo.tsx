import React, { useMemo } from 'react';
import { usePatternTheme } from '@pattern-ui/core';
import CodeDemo from './CodeDemo/CodeDemo';
import CodeConfigurator from './Configurator/CodeConfigurator';

export { CodeDemo, CodeConfigurator };

type CodeDemoProps = React.ComponentProps<typeof CodeDemo>;

interface DemoProps {
  toggle?: boolean;
  demoProps?: CodeDemoProps;
  data: PatternCodeDemo;
}

export function Demo({ data: dataProp, demoProps }: DemoProps) {
  const data: PatternCodeDemo = useMemo(() => {
    if (typeof dataProp === 'function') {
      return {
        type: 'code',
        component: dataProp,
      };
    }
    return dataProp;
  }, []);

  const theme = usePatternTheme();
  const background = typeof data.background === 'function'
    ? data.background(theme.colorScheme)
    : undefined;

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
