import React from "react";

type TimeSlotProps = {
  timeSlot: string[];
  displayCount: number;
};

export const TimeSlot: React.FC<TimeSlotProps> = ({
  timeSlot,
  displayCount,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 overflow-hidden">
      {timeSlot.map(
        (slot, index) =>
          index <= displayCount && <span key={index}>{slot}</span>
      )}
    </div>
  );
};
