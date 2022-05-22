import React from 'react';
import { PatternSize } from '@pattern-ui/styles';
import { CloseButton } from '@pattern-ui/action-icon';
import { ChevronIcon } from './ChevronIcon';

export interface SelectRightSectionProps {
  shouldClear: boolean;
  clearButtonLabel?: string;
  onClear?: () => void;
  size: PatternSize;
  invalid?: boolean;
  // eslint-disable-next-line react/no-unused-prop-types
  disabled?: boolean;
  clearButtonTabIndex?: number;
}

export function SelectRightSection({
  shouldClear,
  clearButtonLabel,
  onClear,
  size,
  invalid,
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
    <ChevronIcon error={invalid} size={size} />
  );
}

SelectRightSection.displayName = '@pattern-ui/core/SelectRightSection';
