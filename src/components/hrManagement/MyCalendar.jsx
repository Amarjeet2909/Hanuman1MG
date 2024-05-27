import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const MyCalendar = (props) => {
  const localizer = momentLocalizer(moment);
  const myEventsList = [
    {
      id: 1,
      title: "Event 1",
      start: new Date(2024, 2, 1),
      end: new Date(2024, 2, 2),
    },
    {
      id: 2,
      title: "Event 2",
      start: new Date(2024, 2, 5),
      end: new Date(2024, 2, 7),
    },
    // Add more events as needed
  ];

  return (
    <div className="h-100">
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        views={["month"]} // Display only the monthly view
        toolbar={false}
      />
    </div>
  );
};

export default MyCalendar;
