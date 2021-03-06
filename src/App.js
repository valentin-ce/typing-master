import React, { useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Play from './components/Play';
import Game from './components/Game'
import Score from './components/Score';
import Contact from './components/Contact';
import Profile from './components/Profile'
import Login from './components/forms/Login';
import Register from './components/forms/Register';
import Context from './context/context';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from "react-router-dom";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState('');
  const [mapInfo, setMapInfo] = useState({});
  const context ={
    isAuthenticated,
    setIsAuthenticated,
    mapInfo,
    setMapInfo
  }


  return (
    
    <Context.Provider value={context}>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/About">
            <About></About>
          </Route>
          <Route path="/Play">
            <Play></Play>
          </Route>
          <Route path="/Game">
            <Game></Game>
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
          <Route path="/Profile">
            <Profile></Profile>
          </Route>
          <Route path="/Login">
            <Login></Login>
          </Route>
          <Route path="/Register">
            <Register></Register>
          </Route>
        </Switch>
      </Router>
    </Context.Provider>
  );
}

export default App;