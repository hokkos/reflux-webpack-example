var React = require('react');
var {DefaultRoute, Route, Routes, NotFoundRoute} = require('react-router');

var App = require('./app');
var Home = require('./home');
var Todos = require('./todos');

var routes = (
  <Routes location="history">
    <Route name="layout" path="/" handler={App}>
      <DefaultRoute name="home" handler={Home} />
      <Route name="todos" handler={Todos} />
    </Route>
  </Routes>
);

React.render(routes, document.body);
