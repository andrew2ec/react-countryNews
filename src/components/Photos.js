'use strict';

var React = require('react');

var Photos = React.createClass({
   displayName: 'Photos',

   render: function render() {
      return React.createElement(
         'div',
         null,
         React.createElement(
            'h2',
            null,
            'These are Photos'
         )
      );
   }
});
module.exports = Photos;
