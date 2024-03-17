import React from "react";

type DayHeaderProps = {
  day: string;
};

export const DayHeader: React.FC<DayHeaderProps> = ({ day }) => {
  return <div className="p-2 text-center ">{day}</div>;
};
