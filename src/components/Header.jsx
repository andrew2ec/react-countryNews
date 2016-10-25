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
					<h1>{this.props.title}</h1>
				</div>
				<div>
					<h2>{this.props.subtitle}</h2>
				</div>
				<div style={linkStyle}>
					<ul style={listStyle}>
						<li><h2>{this.props.link1}</h2></li>
						<li><h2>{this.props.link2}</h2></li>
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
