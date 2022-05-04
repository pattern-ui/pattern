import { itIsPolymorphic, itSupportsSystemProps } from '@pattern/tests';
import { ColorSwatch, ColorSwatchProps } from './ColorSwatch';

const defaultProps: ColorSwatchProps<'div'> = {
  color: '#fff',
};

describe('@pattern/core/ColorSwatch', () => {
  itIsPolymorphic(ColorSwatch, defaultProps);
  itSupportsSystemProps({
    component: ColorSwatch,
    props: defaultProps,
    displayName: '@pattern/core/ColorSwatch',
    refType: HTMLDivElement,
  });
});
