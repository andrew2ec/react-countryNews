'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var BrowserHistory = ReactRouter.browserHistory;

var Header = require('./components/Header.jsx');
var News = require('./components/News.jsx');

var Routes = React.createElement(
   Router,
   { history: BrowserHistory },
   React.createElement(
      Route,
      { path: '/', component: Header },
      React.createElement(Route, { path: '/news', component: News })
   )
);
module.exports = Routes;
