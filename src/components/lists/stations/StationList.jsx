import React, { useEffect } from "react";
import StationListItem from "./StationListItem";

const StationList = ({ data, getSchedule }) => {
  return (
    <ul className="station-list list">
      {!!data
        ? data
            ?.filter((item) => item.vehicleMode === "RAIL")
            .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
            .map((item, index) => (
              <StationListItem
                key={index}
                item={item}
                getSchedule={(value) => getSchedule(value)}
              />
            ))
        : null}
    </ul>
  );
};
export default StationList;
