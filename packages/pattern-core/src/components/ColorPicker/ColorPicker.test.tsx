import React from 'react';
import { render } from '@testing-library/react';
import { checkAccessibility, itSupportsSystemProps } from '@pattern/tests';
import { DEFAULT_THEME } from '@pattern/styles';
import { ColorPicker, ColorPickerProps } from './ColorPicker';

const swatches = DEFAULT_THEME.colors.red;
const defaultProps: ColorPickerProps = {};

describe('@pattern/core/ColorPicker', () => {
  itSupportsSystemProps({
    component: ColorPicker,
    props: defaultProps,
    displayName: '@pattern/core/ColorPicker',
    refType: HTMLDivElement,
  });
  checkAccessibility([
    <ColorPicker
      swatches={swatches}
      format="rgba"
      saturationLabel="Saturation"
      alphaLabel="Alpha"
      hueLabel="Hue"
    />,
  ]);

  it('renders swatches list based on prop', () => {
    const { container: withSwatches } = render(<ColorPicker swatches={swatches} />);
    const { container: withoutSwatches } = render(<ColorPicker />);
    expect(withSwatches.querySelectorAll('.pattern-ColorPicker-swatches')).toHaveLength(1);
    expect(withoutSwatches.querySelectorAll('.pattern-ColorPicker-swatches')).toHaveLength(0);
  });

  it('renders AlphaSlider based on color format', () => {
    const { container: hex } = render(<ColorPicker format="hex" />);
    const { container: rgba } = render(<ColorPicker format="rgba" />);
    expect(hex.querySelectorAll('.pattern-ColorPicker-slider')).toHaveLength(1);
    expect(rgba.querySelectorAll('.pattern-ColorPicker-slider')).toHaveLength(2);
  });

  it('renders picker based on withPicker prop', () => {
    const { container: withPicker } = render(<ColorPicker withPicker />);
    const { container: withoutPicker } = render(<ColorPicker withPicker={false} />);
    expect(withPicker.querySelectorAll('.pattern-ColorPicker-saturation')).toHaveLength(1);
    expect(withoutPicker.querySelectorAll('.pattern-ColorPicker-saturation')).toHaveLength(0);
  });
});
