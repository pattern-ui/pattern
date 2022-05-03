import { itRendersChildren, itSupportsSystemProps } from '@pattern/tests';
import { AspectRatio, AspectRatioProps } from './AspectRatio';

const defaultProps: AspectRatioProps = {
  ratio: 16 / 9,
};

describe('@pattern/core/AspectRatio', () => {
  itRendersChildren(AspectRatio, defaultProps);
  itSupportsSystemProps({
    component: AspectRatio,
    props: defaultProps,
    displayName: '@pattern/core/AspectRatio',
    refType: HTMLDivElement,
  });
});
