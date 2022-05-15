import { itRendersChildren, itSupportsSystemProps } from '@pattern-ui/tests';
import { AspectRatio, AspectRatioProps } from './AspectRatio';

const defaultProps: AspectRatioProps = {
  ratio: 16 / 9,
};

describe('@pattern-ui/core/AspectRatio', () => {
  itRendersChildren(AspectRatio, defaultProps);
  itSupportsSystemProps({
    component: AspectRatio,
    props: defaultProps,
    displayName: '@pattern-ui/core/AspectRatio',
    refType: HTMLDivElement,
  });
});
