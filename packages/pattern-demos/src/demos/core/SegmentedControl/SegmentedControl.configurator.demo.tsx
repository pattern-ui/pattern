import { SegmentedControlWrapper } from './Wrapper';

const codeTemplate = (props: string) => `
import { SegmentedControl } from '@pattern/core';

export default function Demo() {
  return <SegmentedControl${props} />;
}
`;

export const configurator: PatternDemo = {
  type: 'configurator',
  component: SegmentedControlWrapper,
  codeTemplate,
  configurator: [{ name: 'color', type: 'color', initialValue: 'blue', defaultValue: null }],
};
