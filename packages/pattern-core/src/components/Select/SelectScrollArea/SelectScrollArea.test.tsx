import {
  itRendersChildren,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsRef,
} from '@pattern-ui/tests';
import { SelectScrollArea } from './SelectScrollArea';

describe('@pattern-ui/core/SelectScrollArea', () => {
  itRendersChildren(SelectScrollArea, {});
  itSupportsStyle(SelectScrollArea, {});
  itSupportsOthers(SelectScrollArea, {});
  itSupportsRef(SelectScrollArea, {}, HTMLDivElement);

  it('has correct displayName', () => {
    expect(SelectScrollArea.displayName).toStrictEqual('@pattern-ui/core/SelectScrollArea');
  });
});
