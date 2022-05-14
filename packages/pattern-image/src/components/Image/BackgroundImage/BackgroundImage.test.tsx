import { itSupportsSystemProps } from '@pattern-ui/tests';
import { BackgroundImage } from './BackgroundImage';

describe('@pattern-ui/core/BackgroundImage', () => {
  itSupportsSystemProps({
    component: BackgroundImage,
    props: { src: './image.png' },
    displayName: '@pattern-ui/core/BackgroundImage',
    refType: HTMLDivElement,
  });

  it('has correct displayName', () => {
    expect(BackgroundImage.displayName).toStrictEqual('@pattern-ui/core/BackgroundImage');
  });
});
