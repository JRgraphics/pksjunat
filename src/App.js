import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import "./App.css";
import Div100vh from "react-div-100vh";

import Home from "./components/pages/Home/Home";
import Station from "./components/pages/Station/Station";
import Header from "./components/Header";

function App() {
  const [timeValue, setTimeValue] = useState(new Date());

  return (
    <Div100vh className="App">
      <Router>
        <Header
          timeChange={(time) => {
            setTimeValue(time);
          }}
        />
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route path="/station/:id">
            <Station />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </AnimatedSwitch>
      </Router>
    </Div100vh>
  );
}

export default App;
