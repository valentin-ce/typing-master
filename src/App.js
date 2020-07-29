import React, { useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Play from './components/Play';
import Score from './components/Score';
import Contact from './components/Contact';
import Profile from './components/Profile'
import Context from './context/context';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState('');
  const context ={
    isAuthenticated,
    setIsAuthenticated
  }

  return (
    
    <Context.Provider value={context}>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route path="/Play">
            <Play></Play>
          </Route>
          <Route path="/Score">
            <Score></Score>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/Profile">
            <Profile></Profile>
          </Route>
        </Switch>
      </Router>

    </Context.Provider>
  );
}

export default App;