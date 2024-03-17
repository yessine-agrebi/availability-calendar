import React, { Fragment } from "react";

interface CalendarHeadProps {
  daysOfWeek: string[];
  daysOfMonth: Date[];
  children: React.ReactNode;
}

export const CalendarHead: React.FC<CalendarHeadProps> = ({
  daysOfWeek,
  daysOfMonth,
  children,
}) => {
  return (
    <Fragment>
      <div className="grid grid-cols-7 border-b-2 border-blue-500">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="day-header">
            {children}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 border-b-2 border-blue-500">
        {daysOfMonth.map((day, index) => (
          <div key={index} className="p-2 text-center">
            <div className="text-gray-400">{day.getDate()}</div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
