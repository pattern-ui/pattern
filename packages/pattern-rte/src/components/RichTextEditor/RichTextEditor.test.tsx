import { itSupportsSystemProps } from '@pattern-ui/tests';
import { RichTextEditor, RichTextEditorProps } from './RichTextEditor';

const defaultProps: RichTextEditorProps = {
  value: '',
  onChange: () => {},
};

describe('@pattern-ui/core/RichTextEditor', () => {
  itSupportsSystemProps({
    component: RichTextEditor,
    props: defaultProps,
    displayName: '@pattern-ui/rte/RichTextEditor',
  });
});
