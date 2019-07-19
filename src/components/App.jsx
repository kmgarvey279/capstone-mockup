import React from "react";
import Title from "./Title";
import Game from "./Game";
import End from "./End";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App(){
  return (
    <div>
    <style jsx>{`
      `}</style>
      <Router>
        <Route exact path="/" component={Title} />
        <Route path='/game' component={Game} />
        <Route path='/end' component={End} />
      </Router>
    </div>
  );
}

export default App;