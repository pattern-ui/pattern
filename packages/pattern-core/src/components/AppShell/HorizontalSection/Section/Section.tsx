import React, { forwardRef } from 'react';
import { DefaultProps, PolymorphicComponentProps, PolymorphicRef } from '@pattern-ui/styles';
import { Box } from '../../../Box';

interface _SectionProps extends DefaultProps {
  /** Section children */
  children: React.ReactNode;

  /** Force section to take all available height */
  grow?: boolean;
}

export type SectionProps<C> = PolymorphicComponentProps<C, _SectionProps>;

type SectionComponent = <C = 'div'>(props: SectionProps<C>) => React.ReactElement;

export const Section: SectionComponent & { displayName?: string } = forwardRef(
  (
    { component, children, grow = false, sx, ...others }: SectionProps<'div'>,
    ref: PolymorphicRef<'div'>
  ) => (
    <Box
      component={component || 'div'}
      ref={ref}
      sx={[{ flex: grow ? 1 : 0, boxSizing: 'border-box' }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...others}
    >
      {children}
    </Box>
  )
) as any;

Section.displayName = '@pattern-ui/core/Section';
