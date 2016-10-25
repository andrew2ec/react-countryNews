'use strict';

var React = require('react');

var News = React.createClass({
   displayName: 'News',

   render: function render() {
      return React.createElement(
         'div',
         null,
         React.createElement(
            'div',
            null,
            this.props.badge,
            React.createElement(
               'h3',
               null,
               this.props.title
            )
         ),
         React.createElement(
            'div',
            null,
            React.createElement(
               'h4',
               null,
               this.props.subtitle
            )
         ),
         React.createElement(
            'div',
            null,
            React.createElement(
               'p',
               null,
               this.props.content
            )
         ),
         React.createElement(
            'div',
            null,
            this.props.pic1,
            this.props.pic2
         ),
         React.createElement(
            'div',
            null,
            React.createElement(
               'h3',
               null,
               this.props.location
            )
         )
      );
   }
});
module.exports = News;
