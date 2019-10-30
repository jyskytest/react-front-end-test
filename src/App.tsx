import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ContactContainer from './components/ContactContainer'

class App extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            React test from James Young
          </Toolbar>
        </AppBar>

        <div className="contactList">
          <ContactContainer />
        </div>
      </div>

    );
  }
}

export default App;
