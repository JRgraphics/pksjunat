import React from "react";
import {
  convertHSLTimeToReal,
  getNormalizedTime,
} from "../../../dateTimeconverers";

const StationScheduleList = ({ data }) => {
  return (
    <ul className="schedule__list list">
      {data.station?.stoptimesWithoutPatterns?.map((item, index) => (
        <li key={index} className="list__item">
          <div className="item__time">
            {getNormalizedTime(item.scheduledDeparture)}{" "}
            {item.scheduledDeparture < item.realtimeDeparture &&
            convertHSLTimeToReal(item.scheduledDeparture).getMinutes() !==
              convertHSLTimeToReal(item.realtimeDeparture).getMinutes() ? (
              <span className="time-stamp--alert">
                {" ~ " + getNormalizedTime(item.realtimeDeparture)}
              </span>
            ) : null}
            <div>{item.headsign + " " + item.trip?.route?.shortName}</div>
          </div>
          <div className="item__track">
            {"Raide " + item?.stop?.platformCode}
          </div>
        </li>
      ))}
    </ul>
  );
};
export default StationScheduleList;
