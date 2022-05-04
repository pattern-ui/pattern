export function randomId() {
  return `pattern-${Math.random().toString(36).slice(2, 11)}`;
}
