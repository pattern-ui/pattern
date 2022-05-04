export function makeStyleTag() {
  const tag = document.createElement('style');
  tag.type = 'text/css';
  tag.setAttribute('pattern-scroll-lock', '');

  return tag;
}
