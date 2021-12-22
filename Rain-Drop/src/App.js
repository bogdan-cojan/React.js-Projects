import React from "react";

import StartingPage from "./components/StartingPage";
import SoundPage from "./components/SoundPage";
import RainPage from "./components/RainPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={StartingPage} />
        <Route path="/sound" exact component={SoundPage} />
        <Route path="/sound/rain" component={RainPage} />
      </Switch>
    </Router>
  );
}

export default App;
