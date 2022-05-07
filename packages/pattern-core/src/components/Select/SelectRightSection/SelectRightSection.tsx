import React from 'react';
import { PatternSize } from '@pattern-ui/styles';
import { CloseButton } from '../../ActionIcon/CloseButton/CloseButton';
import { ChevronIcon } from './ChevronIcon';

export interface SelectRightSectionProps {
  shouldClear: boolean;
  clearButtonLabel?: string;
  onClear?: () => void;
  size: PatternSize;
  error?: any;
  // eslint-disable-next-line react/no-unused-prop-types
  disabled?: boolean;
  clearButtonTabIndex?: number;
}

export function SelectRightSection({
  shouldClear,
  clearButtonLabel,
  onClear,
  size,
  error,
  clearButtonTabIndex,
}: SelectRightSectionProps) {
  return shouldClear ? (
    <CloseButton
      variant="transparent"
      aria-label={clearButtonLabel}
      onClick={onClear}
      size={size}
      tabIndex={clearButtonTabIndex}
    />
  ) : (
    <ChevronIcon error={error} size={size} />
  );
}

SelectRightSection.displayName = '@pattern-ui/core/SelectRightSection';
