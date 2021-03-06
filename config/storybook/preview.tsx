import React, { useState } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { PatternProvider, ColorSchemeProvider } from '@pattern-ui/styles';
import { useHotkeys } from '@pattern-ui/hooks';
import { NotificationsProvider } from '@pattern-ui/notifications';
import rtlPlugin from 'stylis-plugin-rtl';
import { Affix } from '@pattern-ui/affix';
import { ActionIcon } from '@pattern-ui/action-icon';

export const parameters = { layout: 'fullscreen' };

function ThemeWrapper(props: any) {
  const [rtl, setRtl] = useState(false);
  const toggleRtl = () => setRtl((r) => !r);
  useHotkeys([['mod + L', toggleRtl]]);

  return (
    <ColorSchemeProvider colorScheme="light" toggleColorScheme={() => {}}>
      <PatternProvider
        theme={{
          dir: rtl ? 'rtl' : 'ltr',
          colorScheme: useDarkMode() ? 'dark' : 'light',
          headings: { fontFamily: 'Greycliff CF, sans-serif' },
        }}
        emotionOptions={
          rtl ? { key: 'pattern-rtl', stylisPlugins: [rtlPlugin as any] } : { key: 'pattern' }
        }
        withGlobalStyles
        withNormalizeCSS
      >
        <NotificationsProvider>
          <Affix position={{ right: rtl ? 'unset' : 0, left: rtl ? 0 : 'unset', bottom: 0 }}>
            <ActionIcon
              onClick={toggleRtl}
              variant="default"
              style={{
                borderBottom: 0,
                borderRight: 0,
                borderTopLeftRadius: 4,
                width: 60,
                fontWeight: 700,
              }}
              radius={0}
              size={30}
            >
              {rtl ? 'RTL' : 'LTR'}
            </ActionIcon>
          </Affix>
          <div dir={rtl ? 'rtl' : 'ltr'}>{props.children}</div>
        </NotificationsProvider>
      </PatternProvider>
    </ColorSchemeProvider>
  );
}

export const decorators = [(renderStory: any) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];
