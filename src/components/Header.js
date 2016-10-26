'use strict';

var React = require('react');

var Header = React.createClass({
   displayName: 'Header',

   render: function render() {

      linkStyle = {
         display: 'inline',
         textAlign: 'right'
      };
      listStyle = {
         listStyleType: 'none',
         display: 'inline'
      };
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
               'h2',
               null,
               'Top stories in my country'
            )
         ),
         React.createElement(
            'div',
            { style: linkStyle },
            React.createElement(
               'ul',
               { style: listStyle },
               React.createElement(
                  'li',
                  null,
                  React.createElement(
                     'h2',
                     null,
                     'NEWS'
                  )
               ),
               React.createElement(
                  'li',
                  null,
                  React.createElement(
                     'h2',
                     null,
                     'PHOTOS'
                  )
               )
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
