import React from 'react';
import { Login, Register, DashboardPage } from './Pages';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register}/>
        <Route exact path="/dashboard" component={DashboardPage}/>
      </Switch>
    </Router>
  );
}

export default App;
