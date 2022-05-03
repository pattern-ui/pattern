import { itSupportsClassName, itSupportsStyle, itSupportsOthers } from '@pattern/tests';
import { DEFAULT_LABELS } from '../RichTextEditor/default-labels';
import { DEFAULT_CONTROLS } from '../RichTextEditor/default-control';
import { Toolbar } from './Toolbar';

const defaultProps = {
  controls: DEFAULT_CONTROLS,
  labels: DEFAULT_LABELS,
};

describe('@pattern/rte/Toolbar', () => {
  itSupportsClassName(Toolbar, defaultProps);
  itSupportsStyle(Toolbar, defaultProps);
  itSupportsOthers(Toolbar, defaultProps);

  it('has correct displayName', () => {
    expect(Toolbar.displayName).toStrictEqual('@pattern/rte/Toolbar');
  });
});
