import cx from 'clsx';
import { mergeClassNames } from './merge-class-names';

const classes = {
  root: 'root-1',
  title: 'title-1',
};

describe('@pattern/tss/merge-class-names', () => {
  it('merges classNames correctly', () => {
    expect(
      mergeClassNames(
        cx,
        classes,
        { root: 'root-provider' },
        { root: 'root-test', title: 'title-test' },
        'alert'
      )
    ).toStrictEqual({
      root: 'root-1 root-provider root-test pattern-alert-root',
      title: 'title-1 title-test pattern-alert-title',
    });
  });

  it('merges classNames partial correctly', () => {
    expect(
      mergeClassNames(cx, classes, { title: 'title-provider' }, { root: 'root-test' }, 'alert')
    ).toStrictEqual({
      root: 'root-1 root-test pattern-alert-root',
      title: 'title-1 title-provider pattern-alert-title',
    });
  });
});
