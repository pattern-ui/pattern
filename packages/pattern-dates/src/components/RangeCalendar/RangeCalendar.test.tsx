import { itSupportsSystemProps } from '@pattern-ui/tests';
import { RangeCalendar, RangeCalendarProps } from './RangeCalendar';

const defaultProps: RangeCalendarProps = {
  month: new Date(),
  value: [new Date(), new Date()] as [Date, Date],
  onChange: () => {},
};

describe('@pattern-ui/dates/RangeCalendar', () => {
  itSupportsSystemProps({
    component: RangeCalendar,
    props: defaultProps,
    displayName: '@pattern-ui/dates/RangeCalendar',
    refType: HTMLDivElement,
  });
});
