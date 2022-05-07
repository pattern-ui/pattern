import { createError, createErrors } from './create-error';

describe('@pattern-ui/utils/create-error', () => {
  it('creates correct error with default scope', () => {
    expect(
      createError({ message: 'Tabs component was not found in tree', code: 'tabs-context' })
    ).toBe(
      '[@pattern-ui/core] Tabs component was not found in tree. Learn more – https://pattern-ui.design/errors/tabs-context/'
    );
  });

  it('creates correct error with custom scope', () => {
    expect(
      createError({
        message: 'Tabs component was not found in tree.',
        code: 'core-context',
        scope: '@pattern-ui/core',
      })
    ).toBe(
      '[@pattern-ui/core] Tabs component was not found in tree. Learn more – https://pattern-ui.design/errors/core-context/'
    );
  });

  it('creates errors object with createErrors function', () => {
    expect(createErrors({ error1: 'Error 1', error2: 'Error 2' })).toStrictEqual({
      error1: createError({ message: 'Error 1', code: 'error1' }),
      error2: createError({ message: 'Error 2', code: 'error2' }),
    });

    expect(createErrors({ error1: 'Error 1', error2: 'Error 2' }, '@pattern-ui/dates')).toStrictEqual({
      error1: createError({ message: 'Error 1', code: 'error1', scope: '@pattern-ui/dates' }),
      error2: createError({ message: 'Error 2', code: 'error2', scope: '@pattern-ui/dates' }),
    });
  });
});
