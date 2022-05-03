import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME, PATTERN_SIZES, PatternProvider } from '@pattern/styles';
import { ColorPicker } from './ColorPicker';
import { HueSlider, HueSliderProps } from './HueSlider/HueSlider';
import { AlphaSlider, AlphaSliderProps } from './AlphaSlider/AlphaSlider';

const sizes = PATTERN_SIZES.map((size) => (
  <div style={{ marginTop: 40 }}>
    <ColorPicker
      key={size}
      format="rgba"
      swatches={Object.keys(DEFAULT_THEME.colors).map((color) => DEFAULT_THEME.colors[color][6])}
      size={size}
    />
  </div>
));

function ControlledHueSlider(props: Partial<HueSliderProps>) {
  const [value, setValue] = useState(50);
  return (
    <>
      <HueSlider value={value} onChange={setValue} {...props} />
      {value}
    </>
  );
}

function ControlledAlphaSlider(props: Partial<AlphaSliderProps>) {
  const [value, setValue] = useState(0.4);
  return (
    <>
      <AlphaSlider color="#00ff00" value={value} onChange={setValue} {...props} />
      {value}
    </>
  );
}

storiesOf('ColorPicker', module)
  .add('Sizes', () => <div style={{ padding: 40 }}>{sizes}</div>)
  .add('Controlled HueSlider', () => <ControlledHueSlider />)
  .add('Controlled AlphaSlider', () => <ControlledAlphaSlider />)
  .add('Default props on PatternProvider', () => (
    <PatternProvider
      defaultProps={{
        ColorPicker: {
          format: 'rgba',
          swatches: Object.keys(DEFAULT_THEME.colors).map(
            (color) => DEFAULT_THEME.colors[color][6]
          ),
        },
      }}
    >
      <ColorPicker />
    </PatternProvider>
  ));
