import React from "react";
import Title from "./Title";
import Game from "./Game";
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Title} />
        <Route path='/game' component={Game} />
      </Switch>
    </div>
  );
}

export default App;