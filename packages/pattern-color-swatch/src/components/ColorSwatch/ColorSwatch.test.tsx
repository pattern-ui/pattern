import { itIsPolymorphic, itSupportsSystemProps } from '@pattern-ui/tests';
import { ColorSwatch, ColorSwatchProps } from './ColorSwatch';

const defaultProps: ColorSwatchProps<'div'> = {
  color: '#fff',
};

describe('@pattern-ui/core/ColorSwatch', () => {
  itIsPolymorphic(ColorSwatch, defaultProps);
  itSupportsSystemProps({
    component: ColorSwatch,
    props: defaultProps,
    displayName: '@pattern-ui/core/ColorSwatch',
    refType: HTMLDivElement,
  });
});
