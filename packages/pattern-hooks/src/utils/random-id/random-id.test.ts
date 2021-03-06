import { randomId } from './random-id';

describe('@pattern-ui/hooks/random-id', () => {
  it('returns random id with pattern- prefix', () => {
    expect(randomId().includes('pattern-')).toBe(true);
    expect(randomId()).toHaveLength(17);
  });
});
