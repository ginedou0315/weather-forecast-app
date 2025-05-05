import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Convert props.date to a valid Date object
  const date = props.date ? new Date(props.date) : new Date();

  // Extract the day and month
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });

  // Get the day of the week
  let weekday = days[date.getDay()];

  // Format hours and minutes
  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");

  return (
    <span>
      {day} {month}, {weekday} {hours}:{minutes}
    </span>
  );
}
