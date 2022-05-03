import { itSupportsSystemProps } from '@pattern/tests';
import { RangeCalendar, RangeCalendarProps } from './RangeCalendar';

const defaultProps: RangeCalendarProps = {
  month: new Date(),
  value: [new Date(), new Date()] as [Date, Date],
  onChange: () => {},
};

describe('@pattern/dates/RangeCalendar', () => {
  itSupportsSystemProps({
    component: RangeCalendar,
    props: defaultProps,
    displayName: '@pattern/dates/RangeCalendar',
    refType: HTMLDivElement,
  });
});
