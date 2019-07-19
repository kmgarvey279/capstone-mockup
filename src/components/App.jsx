import React from "react";
import Title from "./Title";
import Game from "./Game";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Router>
        <Route exact path="/" component={Title} />
        <Route path='/game' component={Game} />
      </Router>
    </div>
  );
}

export default App;