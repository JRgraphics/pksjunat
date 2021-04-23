import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";

// Components
import Button from "../../Button";
import Loading from "../../Loading";
import StationScheduleList from "./StationScheduleList";

// Querys
import { scheduleQuery } from "../../../querys";

// Redux
import { updateFavourites } from "../../../actions";
import Return from "../../icons/Return";
import AddFavourite from "../../icons/AddFavourite";
import DeleteFavourite from "../../icons/DeleteFavourite";

const Station = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const favourites = useSelector((state) => state.favourite.favourites);

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
            <Link to="/">
              <Button
                buttonClassName={"button--transparent"}
                buttonText={<Return className="icon__return" />}
              />
            </Link>
            <div className="header__name">{data.station?.name}</div>
            <Button
              buttonClassName={"button--transparent"}
              buttonText={
                favourites?.find((item) => item.id === id) ? (
                  <DeleteFavourite className="icon__favourite" />
                ) : (
                  <AddFavourite className="icon__favourite" />
                )
              }
              onClick={() => dispatch(updateFavourites(data.station?.name, id))}
            />
          </div>
          <StationScheduleList data={data} />
        </>
      )}
    </div>
  );
};
export default Station;
