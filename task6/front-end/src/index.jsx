import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import View from '../view';
import Table from './Table';
import './App.css';


const Index = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/accounts/'>
            <Table />
          </Route>
          <Route path='/accounts/accounts/:id' children={<View />}>
            <View />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default Index;