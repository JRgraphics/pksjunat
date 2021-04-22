import React, { useState, useEffect } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import Button from "./Button";

const Header = ({ timeChange }) => {
  const history = useHistory();
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(new Date());
      timeChange(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="header">
      <Clock value={value} renderNumbers={true} />
      {!!localStorage.getItem("favourites") ? (
        <Button
          buttonText={localStorage.getItem("favourites")}
          onClick={() =>
            history.push("/station/" + localStorage.getItem("favourites"))
          }
        />
      ) : null}
    </div>
  );
};
export default withRouter(Header);
