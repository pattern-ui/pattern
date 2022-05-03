import { isMarkFilled } from './is-mark-filled';

describe('@pattern/core/Slider/is-mark-filled', () => {
  it('correctly detects filled mark without offset', () => {
    expect(isMarkFilled({ mark: { value: 90 }, value: 100 })).toBe(true);
    expect(isMarkFilled({ mark: { value: 10 }, value: 100 })).toBe(true);
    expect(isMarkFilled({ mark: { value: 0 }, value: 100 })).toBe(true);
    expect(isMarkFilled({ mark: { value: 0 }, value: 0 })).toBe(true);
    expect(isMarkFilled({ mark: { value: 10 }, value: 0 })).toBe(false);
    expect(isMarkFilled({ mark: { value: 90 }, value: 10 })).toBe(false);
  });

  it('correctly detects filled negative mark without offset', () => {
    expect(isMarkFilled({ mark: { value: -10 }, value: 0 })).toBe(true);
    expect(isMarkFilled({ mark: { value: -30 }, value: -20 })).toBe(true);
  });

  it('correctly detects filled negative mark with offset', () => {
    expect(isMarkFilled({ mark: { value: -10 }, value: 0 })).toBe(true);
    expect(isMarkFilled({ mark: { value: -30 }, value: -20 })).toBe(true);
  });

  it('correctly detects filled mark with offset', () => {
    expect(isMarkFilled({ mark: { value: 0 }, offset: -10, value: 90 })).toBe(true);
    expect(isMarkFilled({ mark: { value: -10 }, offset: -20, value: 90 })).toBe(true);
  });
});
