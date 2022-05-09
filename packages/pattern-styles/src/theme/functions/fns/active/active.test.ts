import { active } from './active';

const testActiveStyle = {
  backgroundColor: 'red',
};

const testReturnStyle = {
  backgroundColor: 'blue',
  '&:active': testActiveStyle,
};

describe('@pattern-ui/core/utils/apply-active-style', () => {
  it('return style with active and active effect', () => {
    expect({
      backgroundColor: 'blue',
      ...active(testActiveStyle),
    }).toStrictEqual(testReturnStyle);
  });
});
