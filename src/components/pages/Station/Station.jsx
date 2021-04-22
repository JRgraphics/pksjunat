import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { scheduleQuery } from "../../../querys";
import Loading from "../../Loading";
import {
  convertHSLTimeToReal,
  getNormalizedTime,
} from "../../../dateTimeconverers";
import StationScheduleList from "./StationScheduleList";
import Button from "../../Button";

const Station = ({ ...props }) => {
  const { id } = useParams();

  // UseEffect hooks
  useEffect(() => {
    getSchedule(id);
  }, [id]);

  useEffect(() => {
    setInterval(() => {
      if (!!fetchButton) {
        fetchButton?.current?.click();
      }
    }, 15000);
  }, []);

  // Ref hooks
  const fetchButton = useRef(null);

  //HSLQuery for station schedules
  const [getSchedule, { loading, data = [], refetch }] = useLazyQuery(
    scheduleQuery,
    {
      variables: { station: id },
    }
  );

  return (
    <div className="station page">
      {loading ? (
        <Loading />
      ) : (
        <>
          <button
            className="hidden"
            ref={fetchButton}
            onClick={() => refetch()}
          ></button>
          <div className="station__header">
            {data.station?.name}
            <Button
              buttonText={"Lisää suosikkeihin"}
              onClick={() => localStorage.setItem("favourites", id)}
            />
          </div>
          <StationScheduleList data={data} />
        </>
      )}
    </div>
  );
};
export default Station;
