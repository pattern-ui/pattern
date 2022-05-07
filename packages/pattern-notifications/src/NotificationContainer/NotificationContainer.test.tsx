import { itSupportsClassName, itSupportsSx } from '@pattern-ui/tests';
import NotificationContainer from './NotificationContainer';

const defaultProps = {
  notification: { id: 'test', message: 'test-message' },
  onHide: () => {},
  autoClose: false,
  innerRef: undefined,
} as const;

describe('@pattern-ui/notifications/NotificationContainer', () => {
  itSupportsSx(NotificationContainer, defaultProps);
  itSupportsClassName(NotificationContainer, defaultProps);

  it('has correct displayName', () => {
    expect(NotificationContainer.displayName).toStrictEqual(
      '@pattern-ui/notifications/NotificationContainer'
    );
  });
});
