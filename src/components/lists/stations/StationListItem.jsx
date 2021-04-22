import React, { useEffect, useState } from "react";
import {
  convertHSLTimeToReal,
  getNormalizedTime,
  putFrontZeroes,
} from "../../../dateTimeconverers";
import Button from "../../Button";
import { Link } from "react-router-dom";

const StationListItem = ({ item, getSchedule }) => {
  const [scheduleTime, setScheduleTime] = useState(new Date());
  const [realTime, setRealTime] = useState(new Date());

  useEffect(() => {
    if (!!item) {
      setScheduleTime(item.stoptimesWithoutPatterns[0].scheduledDeparture);
      setRealTime(item.stoptimesWithoutPatterns[0].realtimeDeparture);
    }
  }, [item]);

  return (
    <li className="station-list__item">
      <Link className="item__link" to={"/station/" + item.gtfsId}>
        <div className="link__name">{item.name}</div>
        <div>Seuraava lähtö:</div>
        <div>
          {getNormalizedTime(scheduleTime)}{" "}
          {scheduleTime < realTime &&
          convertHSLTimeToReal(scheduleTime).getMinutes() !==
            convertHSLTimeToReal(realTime).getMinutes() ? (
            <span className="time-stamp--alert">
              {" ~ " + getNormalizedTime(realTime)}
            </span>
          ) : null}
        </div>
      </Link>
    </li>
  );
};
export default StationListItem;
