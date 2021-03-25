import logo from './logo.svg';
import './App.css';

import Home from './components/Home'
import Login from './components/Login'
import ToDoApp from './components/ToDoApp'
import Movies from './components/Movies'

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login Link</Link>
              </li>
              <li>
                <Link to="/todo">ToDo App Link</Link>
              </li>
              <li>
                <Link to="/movies">Movies Link</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/movies">
              <Movies />
            </Route>
            <Route path="/todo">
              <ToDoApp />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;
