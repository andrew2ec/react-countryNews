var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./Routes.jsx');
var Header = require('./components/Header.jsx');

ReactDOM.render(Routes, document.getElementById('switch'));
ReactDOM.render(<Header title="Country News" subtitle="Top stories in my country" />, document.getElementById('switch'));
