import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ViewAccount from './ViewAccount';
import Users from './Users';
import '../../src/App.css';

const Accounts = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/accounts/'>
            <Users />
          </Route>
          <Route path='/accounts/accounts/:id' children={<ViewAccount />}>
            <ViewAccount />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Accounts;