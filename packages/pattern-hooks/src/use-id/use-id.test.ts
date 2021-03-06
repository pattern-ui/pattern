import { renderHook } from '@testing-library/react-hooks';
import { useId } from './use-id';

describe('@pattern-ui/hooks/use-id', () => {
  it('returns id from hook call', () => {
    const hook = renderHook(() => useId('test-id'));
    expect(hook.result.current).toBe('test-id');
  });

  it('returns random id with prefix "pattern-" when called without arguments', () => {
    const hook = renderHook(() => useId());
    expect(hook.result.current.includes('pattern-')).toBe(true);
  });

  it('returns random id when called without arguments', () => {
    const hook1 = renderHook(() => useId());
    const hook2 = renderHook(() => useId());
    expect(hook1.result.current).not.toStrictEqual(hook2.result.current);
  });

  it('returns generated id if id was not provided', () => {
    const hook = renderHook(() => useId(null, () => 'test-id'));
    expect(hook.result.current).toBe('test-id');
  });
});
