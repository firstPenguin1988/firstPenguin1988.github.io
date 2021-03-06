import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import Login from './components/login';
//import Error from "./components/Error";
import Logout from "./components/logout"
import User from "./components/user";

class App extends Component {

  

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Container} />
          <Route path="/logout" component={Logout} />
          <Route path="/user" component={User} />
          <Route path="*" component={Error} />
        </Switch>
      </div>
    );
  }
}

export default App;
