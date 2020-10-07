import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Ministries from './components/pages/Ministries';
import Involvement from './components/pages/Involvement';
import SignUp from './components/pages/SignUp';
import OurTeam from './components/pages/OurTeam';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component = {Home} />
        <Route path='/about' component = {About} />
        <Route path='/ministries' component = {Ministries} />
        <Route path='/involvement' component = {Involvement} />
        <Route path='/sign-up' component = {SignUp} />
        <Route path='/our-team' component = {OurTeam} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
