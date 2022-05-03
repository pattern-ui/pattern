import { itSupportsSystemProps } from '@pattern/tests';
import { RichTextEditor, RichTextEditorProps } from './RichTextEditor';

const defaultProps: RichTextEditorProps = {
  value: '',
  onChange: () => {},
};

describe('@pattern/core/RichTextEditor', () => {
  itSupportsSystemProps({
    component: RichTextEditor,
    props: defaultProps,
    displayName: '@pattern/rte/RichTextEditor',
  });
});
