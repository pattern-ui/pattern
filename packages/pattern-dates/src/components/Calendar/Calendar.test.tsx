import { itSupportsSystemProps } from '@pattern-ui/tests';
import { Calendar, CalendarProps } from './Calendar';

const defaultProps: CalendarProps = {
  month: new Date(),
  value: new Date(),
};

describe('@pattern-ui/dates/Calendar', () => {
  itSupportsSystemProps({
    component: Calendar,
    props: defaultProps,
    displayName: '@pattern-ui/dates/Calendar',
  });
});
