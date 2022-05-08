import { SegmentedControlWrapper } from './Wrapper';

const codeTemplate = (props: string) => `
import { SegmentedControl } from '@pattern-ui/core';

export default function Demo() {
  return <SegmentedControl${props} />;
}
`;

export const control: PatternControlDemo = {
  type: 'control',
  component: SegmentedControlWrapper,
  codeTemplate,
  controls: [{ name: 'color', type: 'color', initialValue: 'blue', defaultValue: null }],
};
