import React from 'react';
import { render } from '@testing-library/react';
import { itSupportsSystemProps } from '@pattern-ui/tests';
import { Avatar } from '../Avatar';
import { AvatarsGroup, AvatarsGroupProps } from './AvatarsGroup';

const defaultProps: AvatarsGroupProps = {
  children: [<Avatar>M</Avatar>, <Avatar>K</Avatar>, <Avatar>L</Avatar>, <Avatar>L</Avatar>],
};

describe('@pattern-ui/core/AvatarsGroup', () => {
  itSupportsSystemProps({
    component: AvatarsGroup,
    props: defaultProps,
    displayName: '@pattern-ui/core/AvatarsGroup',
    refType: HTMLDivElement,
  });

  it('renders avatars based on limit prop', () => {
    const { container: limit2 } = render(<AvatarsGroup {...defaultProps} limit={2} />);
    const { container: limit3 } = render(<AvatarsGroup {...defaultProps} limit={3} />);
    const { container: limit10 } = render(<AvatarsGroup {...defaultProps} limit={10} />);

    expect(limit2.querySelectorAll('.pattern-Avatar-root')).toHaveLength(3);
    expect(limit3.querySelectorAll('.pattern-Avatar-root')).toHaveLength(4);
    expect(limit10.querySelectorAll('.pattern-Avatar-root')).toHaveLength(4);
  });

  it('renders the truncated length properly', () => {
    const totalView = render(<AvatarsGroup {...defaultProps} limit={4} total={50} />);
    const limitView = render(<AvatarsGroup {...defaultProps} limit={3} />);

    expect(totalView.getByText('+46')).toBeInTheDocument();
    expect(limitView.getByText('+1')).toBeInTheDocument();
  });
});
