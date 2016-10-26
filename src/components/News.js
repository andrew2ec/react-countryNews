'use strict';

var React = require('react');

var News = React.createClass({
   displayName: 'News',

   render: function render() {
      return React.createElement(
         'h2',
         null,
         'This is the News'
      );
   }
});
module.exports = News;
