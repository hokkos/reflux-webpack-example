var React = require('react');
var {Link} = require('react-router');

require('./app.scss');

module.exports = React.createClass({

  render() {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="home">Home</Link></li>
            <li><Link to="todos">Todos</Link></li>
          </ul>
        </header>
        <this.props.activeRouteHandler />
      </div>
    );
  }
});
