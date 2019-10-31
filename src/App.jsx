import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import "./App.css";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ContactContainer from './components/ContactContainer'
import Contact from './components/Contact';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppBar position="static">
            <Toolbar>
              React test from James Young
          </Toolbar>
          </AppBar>

        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contacts">
            <ContactContainer />
          </Route>
          <Route path="/contacts/:id">
            <Contact />
          </Route>

        </Switch>
      </Router>

    );
  }
}

export default App;
