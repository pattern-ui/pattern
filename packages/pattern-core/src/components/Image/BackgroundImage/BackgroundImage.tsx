import React, { forwardRef } from 'react';
import {
  DefaultProps,
  PatternNumberSize,
  usePatternDefaultProps,
  PolymorphicComponentProps,
  PolymorphicRef,
} from '@pattern-ui/styles';
import { Box } from '../../Box';

interface _BackgroundImageProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  src: string;
  radius?: PatternNumberSize;
}

export type BackgroundImageProps<C> = C extends React.ElementType
  ? PolymorphicComponentProps<C, _BackgroundImageProps>
  : never;

type BackgroundImageComponent = (<C = 'div'>(
  props: BackgroundImageProps<C>
) => React.ReactElement) & {
  displayName?: string;
};

const defaultProps: Partial<BackgroundImageProps<any>> = {
  radius: 0,
};

export const BackgroundImage: BackgroundImageComponent = forwardRef(
  (props: BackgroundImageProps<'div'>, ref: PolymorphicRef<'div'>) => {
    const { src, radius, sx, ...others } = usePatternDefaultProps(
      'BackgroundImage',
      defaultProps,
      props
    );

    return (
      <Box
        {...others}
        ref={ref}
        sx={[
          (theme) => ({
            ...theme.fn.focusStyles(),
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'block',
            width: '100%',
            border: 0,
            textDecoration: 'none',
            color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
            backgroundImage: `url(${src})`,
            borderRadius: theme.fn.radius(radius),
          }),
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      />
    );
  }
) as any;

BackgroundImage.displayName = '@pattern-ui/core/BackgroundImage';
