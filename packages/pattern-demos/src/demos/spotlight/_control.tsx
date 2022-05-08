import React from 'react';
import { Button, Group } from '@pattern-ui/core';
import { useSpotlight } from '@pattern-ui/spotlight';

export function SpotlightControl({ buttonLabel }: { buttonLabel?: string }) {
  const spotlight = useSpotlight();
  return (
    <Group position="center">
      <Button onClick={spotlight.openSpotlight}>{buttonLabel || 'Open spotlight'}</Button>
    </Group>
  );
}
