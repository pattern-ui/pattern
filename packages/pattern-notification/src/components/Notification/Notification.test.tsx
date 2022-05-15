import React from 'react';
import { render } from '@testing-library/react';
import { checkAccessibility, itRendersChildren, itSupportsSystemProps } from '@pattern-ui/tests';
import { Notification, NotificationProps } from './Notification';

const defaultProps: NotificationProps = {
  icon: 'test-icon',
  title: 'test-notification',
  closeButtonProps: { title: 'test-close' },
};

describe('@pattern-ui/core/Notification', () => {
  itRendersChildren(Notification, defaultProps);
  checkAccessibility([<Notification {...defaultProps} />]);
  itSupportsSystemProps({
    component: Notification,
    props: defaultProps,
    displayName: '@pattern-ui/core/Notification',
    refType: HTMLDivElement,
  });

  it('does not render close button if disallowClose is true', () => {
    const { container: allowClose } = render(<Notification {...defaultProps} />);
    const { container: disallowClose } = render(<Notification {...defaultProps} disallowClose />);
    expect(allowClose.querySelectorAll('.pattern-Notification-closeButton')).toHaveLength(1);
    expect(disallowClose.querySelectorAll('.pattern-Notification-closeButton')).toHaveLength(0);
  });

  it('renders given icon', () => {
    const { container: withIcon } = render(<Notification {...defaultProps} icon="test-icon" />);
    const { container: withoutIcon } = render(<Notification {...defaultProps} icon={null} />);
    expect(withIcon.querySelector('.pattern-Notification-icon').textContent).toBe('test-icon');
    expect(withoutIcon.querySelector('.pattern-Notification-icon')).toBe(null);
  });

  it('displays loader when loading prop is true', () => {
    const { container: loading } = render(<Notification {...defaultProps} loading />);
    const { container: notLoading } = render(<Notification {...defaultProps} loading={false} />);
    expect(loading.querySelector('.pattern-Notification-loader')).toBeInTheDocument();
    expect(loading.querySelector('.pattern-Notification-icon')).toBe(null);
    expect(notLoading.querySelector('.pattern-Notification-loader')).toBe(null);
    expect(notLoading.querySelector('.pattern-Notification-icon')).toBeInTheDocument();
    expect(notLoading.querySelector('.pattern-Notification-icon').textContent).toBe('test-icon');
  });

  it('renders given title', () => {
    const { container: withTitle } = render(<Notification {...defaultProps} title="test-title" />);
    const { container: withoutTitle } = render(<Notification {...defaultProps} title={null} />);
    expect(withTitle.querySelector('.pattern-Notification-title').textContent).toBe('test-title');
    expect(withoutTitle.querySelectorAll('.pattern-Notification-title')).toHaveLength(0);
  });
});
