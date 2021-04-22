import React, { useEffect, useState } from "react";
import {
  convertHSLTimeToReal,
  getNormalizedTime,
} from "../../../dateTimeconverers";

const StationScheduleList = ({ data }) => {
  return (
    <ul className="schedule__list list">
      {data.station?.stoptimesWithoutPatterns?.map((item, index) => (
        <li className="list__item">
          <div>
            {getNormalizedTime(item.scheduledDeparture)}{" "}
            {item.scheduledDeparture < item.realtimeDeparture &&
            convertHSLTimeToReal(item.scheduledDeparture).getMinutes() !==
              convertHSLTimeToReal(item.realtimeDeparture).getMinutes() ? (
              <span className="time-stamp--alert">
                {" ~ " + getNormalizedTime(item.realtimeDeparture)}
              </span>
            ) : null}
          </div>
          {item.headsign + " " + item?.stop?.platformCode}
        </li>
      ))}
    </ul>
  );
};
export default StationScheduleList;
