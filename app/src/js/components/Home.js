var React = require('react');
var Router = require('react-router');
var { Link } = Router;

var Home = React.createClass({
	render: function() {
		return (
			<div className="home">
				<h2>Home</h2>
				<ul>
					<li><Link to="visitors" params={{name: "Jeremy"}}>See Visitors</Link></li>
				</ul>
			</div>
		);
	}
});

module.exports = Home;
