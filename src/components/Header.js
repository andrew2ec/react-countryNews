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
                     this.props.link1
                  )
               ),
               React.createElement(
                  'li',
                  null,
                  React.createElement(
                     'h2',
                     null,
                     this.props.link2
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
