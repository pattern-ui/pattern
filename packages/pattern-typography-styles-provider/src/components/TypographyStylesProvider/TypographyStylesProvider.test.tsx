import { itRendersChildren, itSupportsSystemProps } from '@pattern-ui/tests';
import {
  TypographyStylesProvider,
  TypographyStylesProviderProps,
} from './TypographyStylesProvider';

const defaultProps: TypographyStylesProviderProps = {
  children: 'test-children',
};

describe('@pattern-ui/core/TypographyStylesProvider', () => {
  itRendersChildren(TypographyStylesProvider, defaultProps);
  itSupportsSystemProps({
    component: TypographyStylesProvider,
    props: defaultProps,
    displayName: '@pattern-ui/core/TypographyStylesProvider',
    refType: HTMLDivElement,
  });
});
