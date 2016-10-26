var React = require('react');

var Header = React.createClass({
	render: function(){

		linkStyle = {
			display:'inline',
			textAlign:'right'
		}
		listStyle = {
			listStyleType:'none',
			display:'inline'
		}
		return(
			<div>
				<div>
					<h1>Country News</h1>
				</div>
				<div>
					<h2>Top stories in my country</h2>
				</div>
				<div style={linkStyle}>
					<ul style={listStyle}>
						<li><h2>NEWS</h2></li>
						<li><h2>PHOTOS</h2></li>
					</ul>
				</div>
				<div>
					{this.props.children}
				</div>
			</div>
		);
	}
});
module.exports = Header;
