'use strict';

var React = require('react');

var Photos = React.createClass({
   displayName: 'Photos',

   render: function render() {
      return React.createElement(
         'div',
         null,
         React.createElement(
            'h1',
            null,
            'Photos'
         ),
         React.createElement(
            'ul',
            null,
            React.createElement(
               'li',
               null,
               this.props.pic
            ),
            React.createElement(
               'li',
               null,
               this.props.pic1
            ),
            React.createElement(
               'li',
               null,
               this.props.pic2
            ),
            React.createElement(
               'li',
               null,
               this.props.pic3
            )
         )
      );
   }
});
module.exports = Photos;
