'use strict';

var React = require('react');

var Header = React.createClass({
   displayName: 'Header',

   render: function render() {
      return React.createElement(
         'div',
         null,
         React.createElement(
            'div',
            null,
            React.createElement(
               'h1',
               null,
               this.props.title
            )
         ),
         React.createElement(
            'div',
            null,
            React.createElement(
               'h2',
               null,
               this.props.subtitle
            )
         ),
         React.createElement(
            'div',
            null,
            React.createElement(
               'h2',
               null,
               this.props.link1
            ),
            React.createElement(
               'h2',
               null,
               this.props.link2
            )
         ),
         React.createElement(
            'div',
            null,
            this.props.children
         )
      );
   }
});
module.exports = Header;
