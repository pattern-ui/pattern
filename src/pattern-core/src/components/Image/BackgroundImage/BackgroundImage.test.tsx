import { itSupportsSystemProps } from '@pattern/tests';
import { BackgroundImage } from './BackgroundImage';

describe('@pattern/core/BackgroundImage', () => {
  itSupportsSystemProps({
    component: BackgroundImage,
    props: { src: './image.png' },
    displayName: '@pattern/core/BackgroundImage',
    refType: HTMLDivElement,
  });

  it('has correct displayName', () => {
    expect(BackgroundImage.displayName).toStrictEqual('@pattern/core/BackgroundImage');
  });
});
