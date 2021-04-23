import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import { AnimatedSwitch } from "react-router-transition";
import Div100vh from "react-div-100vh";
import Header from "./components/Header";
import Home from "./components/pages/Home/Home";
import Station from "./components/pages/Station/Station";

// Redux
import store from "./store";

// Styles
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Div100vh className="App">
        <Router>
          <Header />
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
    </Provider>
  );
}

export default App;
