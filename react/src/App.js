import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import SignIn from './SignIn';
import Todos from './Todos';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/sign-in" />
        </Route>
        <Route path="/sign-in" component={SignIn}></Route>
        <Route path="/todos" component={Todos}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
    </Router>
  );
}

export default App;
