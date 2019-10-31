import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ContactContainer from './components/ContactContainer'
import Contact from './components/Contact';

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

          <div className="contactList">
            ContactContainer
          </div>
        </div>
        <Switch>
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
