var React = require('react');

var Header = React.createClass({
	render: function(){
		return(
			<div>
				<div>
					<h1>{this.props.title}</h1>
				</div>
				<div>
					<h2>{this.props.subtitle}</h2>
				</div>
				<div>
					<h2>{this.props.link1}</h2>
					<h2>{this.props.link2}</h2>
				</div>
				<div>
					{this.props.children}
				</div>
			</div>
		);
	}
});
module.exports = Header;
