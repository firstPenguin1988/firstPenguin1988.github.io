import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import Login from './components/login';
import Error from "./components/Error";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Container} />
          <Route path="/Login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
