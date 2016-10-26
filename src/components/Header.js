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
               'Country News'
            )
         ),
         React.createElement(
            'div',
            null,
            React.createElement(
               'p',
               null,
               'Top stories in my country'
            )
         ),
         React.createElement(
            'div',
            null,
            React.createElement(
               'ul',
               null,
               React.createElement(
                  'li',
                  null,
                  'NEWS'
               ),
               React.createElement(
                  'li',
                  null,
                  'PHOTOS'
               )
            ),
            this.props.children
         )
      );
   }
});
module.exports = Header;
