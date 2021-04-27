import React, { useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";

// Components
import Button from "./Button";
import Clock from "react-clock";

// Redux
import { getFavourites, updateFavourites } from "../actions";
import { useSelector, useDispatch } from "react-redux";

// Styles
import "react-clock/dist/Clock.css";
import { putFrontZeroes } from "../dateTimeconverers";
import FavouriteButton from "./FavouriteButton";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [value, setValue] = useState(new Date());

  const favourites = useSelector((state) => state.favourite.favourites);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(new Date());
    }, 1000);
    dispatch(getFavourites());

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__clock">
          {putFrontZeroes(value.getHours()) +
            ":" +
            putFrontZeroes(value.getMinutes()) +
            ":" +
            putFrontZeroes(value.getSeconds())}
        </div>
      </div>
      <div className="header__container">
        <div className="header__title">Favourites</div>
        {!!favourites
          ? favourites?.map((item, index) => (
              <FavouriteButton
                key={index}
                item={item}
                onClick={() => history.push("/station/" + item.id)}
                onDelete={() => dispatch(updateFavourites(item.name, item.id))}
              />
            ))
          : null}
      </div>
    </div>
  );
};
export default withRouter(Header);
