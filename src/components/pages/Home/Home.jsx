import React, { useEffect, useState, useRef } from "react";
import { useLazyQuery } from "@apollo/client";
import { query, scheduleQuery } from "../../../querys";
import StationList from "../../lists/stations/StationList";
import Header from "../../Header";
import SearchBar from "../../SearchBar";
import Loading from "../../Loading";

const Home = () => {
  // HSL Queries
  const [getStations, { data = [], refetch, loading }] = useLazyQuery(query);

  // State hooks
  const [searchFilter, setSearchFilter] = useState("");
  const [timeResetInterval, setTimeResetInterval] = useState(new Date());

  // Ref hooks
  const fetchButton = useRef(null);

  // Sets searchfilter's value
  const stationFilterUpdate = (input) => {
    setSearchFilter(input.toLowerCase());
  };

  // UseEffect hooks

  useEffect(() => {
    getStations();
    setInterval(() => {
      if (!!fetchButton) {
        fetchButton?.current?.click();
      }
    }, 15000);
  }, []);

  return (
    <div className="home page">
      {loading ? (
        <Loading />
      ) : (
        <>
          {" "}
          <button
            className="hidden"
            ref={fetchButton}
            onClick={() => refetch()}
          ></button>
          <SearchBar onChange={(input) => stationFilterUpdate(input)} />
          <StationList
            data={data.stations?.filter((item) =>
              item.name.toLowerCase().includes(searchFilter)
            )}
          />
        </>
      )}
    </div>
  );
};
export default Home;
