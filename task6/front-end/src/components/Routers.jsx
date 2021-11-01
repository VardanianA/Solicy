import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ViewAccount from './ViewAccount';
import Users from './Users';


const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/accounts/'>
          <Users />
        </Route>
        <Route path='/accounts/:id'>
          <ViewAccount />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routers;