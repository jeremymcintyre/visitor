var React = require('react');
var Router = require('react-router');
var { Route } = Router;

var App = require('./components/App');
var Home = require('./components/Home');
var ActivityList = require('./components/ActivityList');
var Activity = require('./components/Activity');

var routes = (
    <Route handler={App}>
      <Route name="home" path="/" handler={Home}>
        <Route name="activities" path="/activites" handler={ActivityList}>
          <Route name="activity" path="/activities/:name" handler={Activity} />
        </Route>
      </Route>
    </Route>
);

Router.run(routes, function(Handler) {
    React.render(<Handler />, document.body);
});
