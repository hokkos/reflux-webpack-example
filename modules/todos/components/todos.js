var React = require('react');
var Reflux = require('reflux');

require('../todos.scss');

module.exports = React.createClass({

  mixins: [ Reflux.ListenerMixin],

  getDefaultProps() {
    return {
      list: []
    };
  },

  componentDidMount() {
    console.log('Mounted');
  },

  render() {
    return (
      <div>Todos</div>
    );
  }
});
