import React, { useEffect, useState } from "react";
import {
  convertHSLTimeToReal,
  getNormalizedTime,
} from "../../../dateTimeconverers";
import { Link } from "react-router-dom";

const StationListItem = ({ item, getSchedule }) => {
  const [scheduleTime, setScheduleTime] = useState(new Date());
  const [realTime, setRealTime] = useState(new Date());
  const [scheduleItem, setscheduleItem] = useState({});

  useEffect(() => {
    if (!!item) {
      setScheduleTime(item.stoptimesWithoutPatterns[0].scheduledDeparture);
      setRealTime(item.stoptimesWithoutPatterns[0].realtimeDeparture);
      setscheduleItem(item.stoptimesWithoutPatterns[0]);
    }
  }, [item]);

  return (
    <li className="station-list__item">
      <Link className="item__link" to={"/station/" + item.gtfsId}>
        <div className="link__name">{item.name}</div>
        <div className="link__time-title">Seuraava lähtö:</div>
        <div className="link__description">
          <div className="link__time">
            {getNormalizedTime(scheduleTime)}{" "}
            {scheduleTime < realTime &&
            convertHSLTimeToReal(scheduleTime).getMinutes() !==
              convertHSLTimeToReal(realTime).getMinutes() ? (
              <span className="time-stamp--alert">
                {" ~ " + getNormalizedTime(realTime)}
              </span>
            ) : null}
          </div>
          <div className="link__track">
            {"Raide " + scheduleItem?.stop?.platformCode}
          </div>
          <div className="link__track">
            {scheduleItem?.trip?.route?.shortName}
          </div>
          <div className="link__track">{scheduleItem?.headsign}</div>
        </div>
      </Link>
    </li>
  );
};
export default StationListItem;
