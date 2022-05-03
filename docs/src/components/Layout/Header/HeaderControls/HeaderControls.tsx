import React from 'react';
import { Box, Group, usePatternColorScheme, Tooltip } from '@pattern/core';
import { TextDirectionRtl, TextDirectionLtr, Sun, Moon } from 'tabler-icons-react';
import { MarkGithubIcon } from '@primer/octicons-react';
import { DiscordIcon } from './DiscordIcon';
import { HeaderControl } from './HeaderControl';
import { SearchControl } from './SearchControl';
import { useDirectionContext } from '../../DirectionContext';

export function HeaderControls() {
  const { dir, toggleDirection } = useDirectionContext();
  const { colorScheme, toggleColorScheme } = usePatternColorScheme();

  return (
    <Box sx={{ position: 'relative' }}>
      <Tooltip.Group openDelay={600} closeDelay={100}>
        <Group pr="md" spacing="xs">
          <SearchControl />

          <HeaderControl
            link="https://discord.gg/eUZpPbpxb4"
            tooltip="Discord"
            variant="discord"
            hideOnMobile
          >
            <DiscordIcon size={20} />
          </HeaderControl>

          <HeaderControl
            link="https://github.com/pattern-ui/pattern/"
            tooltip="Source code"
            hideOnMobile
          >
            <MarkGithubIcon size={20} />
          </HeaderControl>

          <HeaderControl
            onClick={toggleDirection}
            tooltip={`${dir === 'ltr' ? 'RTL' : 'LTR'} direction`}
            hideOnMobile
          >
            {dir === 'rtl' ? <TextDirectionLtr size={22} /> : <TextDirectionRtl size={22} />}
          </HeaderControl>
          <HeaderControl
            onClick={() => toggleColorScheme()}
            tooltip={`${colorScheme === 'dark' ? 'Light' : 'Dark'} mode`}
          >
            {colorScheme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
          </HeaderControl>
        </Group>
      </Tooltip.Group>
    </Box>
  );
}
