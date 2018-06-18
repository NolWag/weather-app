import React from 'react';
import ReactDOM from 'react-dom';
import './components/css/styles.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';

// Views
import App from './components/App';
import Home from './components/Home';
import CurrentWeather from './components/CurrentWeather';
import ErrorDisplay from './components/ErrorDisplay';

ReactDOM.render(
  <Router>
    <App>
      <Route exact path='/' component={Home}/>
      <Route exact path='/current-weather' component={CurrentWeather}/>
      <Route exact path='/error' component={ErrorDisplay}/>
    </App>
  </Router>
  , document.getElementById('root'));
