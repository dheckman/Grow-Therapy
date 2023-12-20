import { useContext, useRef } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import calendarIcon from '../assets/calendar-icon.svg';
import { ActionBarItem } from './common/ActionBarItem';

import { DashboardContext, Value } from '../containers/Dashboard';
import { useOutsideClickHandler } from '../hooks/useOutsideClickHandler';

const currentDate = new Date();

export const DatePicker = () => {
  const { isCalendarOpen, setIsCalendarOpen, selectedDate, setSelectedDate } =
    useContext(DashboardContext);

  const wrapperRef = useRef(null);
  useOutsideClickHandler(wrapperRef, setIsCalendarOpen);

  const formatDate = (date: Value) => {
    return date?.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleUpdateDate = (value: Value) => {
    setSelectedDate(value);
    setIsCalendarOpen(false);
  };

  return (
    <div ref={wrapperRef}>
      <ActionBarItem
        icon={calendarIcon}
        isItemToggled={isCalendarOpen}
        handleToggle={() => setIsCalendarOpen(!isCalendarOpen)}
        label="DATE"
        value={formatDate(selectedDate)}
      />
      {isCalendarOpen && (
        <Calendar
          next2Label={null}
          prev2Label={null}
          maxDate={currentDate}
          tileClassName="test"
          calendarType="gregory"
          className="absolute top-full rounded-3xl border-none px-4 py-8 shadow-dropdown"
          onChange={(value) => handleUpdateDate(value)}
          value={selectedDate}
          view="month"
        />
      )}
    </div>
  );
};
