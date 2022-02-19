import React from "react";
import "./ScheduleItem.css";

const ScheduleItem = (props) => {
  return (
    <div className="schedule-box">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <h3>{props.time}</h3>
      </div>
      <h3>{props.desc}</h3>
      <p>{props.duration}</p>
    </div>
  );
};

export default ScheduleItem;
