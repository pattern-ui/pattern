import 'dayjs/locale/ru';
import React from 'react';
import { DatePicker } from '@pattern-ui/dates';

export default function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker locale="ru" placeholder="Выберите дату" defaultValue={new Date()} />
    </div>
  );
}
