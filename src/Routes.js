'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var browserHistory = ReactRouter.browserHistory;
var Header = require('./components/Header.jsx');
var News = require('./components/News.jsx');
var Photos = require('./components/Photos.jsx');

var Routes = React.createElement(
   Router,
   { history: browserHistory },
   React.createElement(
      Route,
      { path: '/', component: Header },
      React.createElement(Route, { path: 'news', component: News }),
      React.createElement(Route, { path: 'photos', component: Photos })
   )
);
module.exports = Routes;
