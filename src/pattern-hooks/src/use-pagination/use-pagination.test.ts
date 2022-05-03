import { renderHook, act } from '@testing-library/react-hooks';
import { usePagination } from './use-pagination';

describe('@pattern/hooks/use-pagination', () => {
  it('setPage function sets active page', () => {
    const { result } = renderHook(() => usePagination({ total: 10 }));

    act(() => result.current.setPage(5));
    expect(result.current.active).toBe(5);

    act(() => result.current.setPage(15));
    expect(result.current.active).toBe(10);

    act(() => result.current.setPage(-1));
    expect(result.current.active).toBe(1);
  });

  it('returns correct initial state', () => {
    const { result } = renderHook(() => usePagination({ total: 10 }));
    expect(result.current.range).toStrictEqual([1, 2, 3, 4, 5, 'dots', 10]);
    expect(result.current.active).toBe(1);
  });

  it('does not change range length between page changes', () => {
    const { result } = renderHook(() => usePagination({ total: 10 }));

    [...new Array(10).fill(null)].forEach(() => {
      expect(result.current.range.length).toBe(7);
      act(() => result.current.next());
    });
  });

  it('returns correct initial state with custom parameters', () => {
    const { result } = renderHook(() =>
      usePagination({
        total: 20,
        siblings: 2,
        boundaries: 2,
        initialPage: 7,
      })
    );

    expect(result.current.range).toStrictEqual([1, 2, 'dots', 5, 6, 7, 8, 9, 'dots', 19, 20]);
    expect(result.current.active).toBe(7);
  });

  it('calls onChange correctly with active page', () => {
    const spy = jest.fn();
    const { result } = renderHook(() =>
      usePagination({
        onChange: spy,
        total: 20,
        siblings: 2,
        boundaries: 2,
        initialPage: 7,
      })
    );

    act(() => result.current.next());

    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(8);
  });

  it('does not change range length between page changes with custom parameters', () => {
    const { result } = renderHook(() =>
      usePagination({
        total: 20,
        siblings: 2,
        boundaries: 2,
        initialPage: 7,
      })
    );

    [...new Array(20).fill(null)].forEach(() => {
      expect(result.current.range.length).toBe(11);

      act(() => result.current.next());
    });
  });
});
