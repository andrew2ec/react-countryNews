var React = require('react');

var Photos = React.createClass({
	render: function(){
		return(
			<div>
				<h1>Photos</h1>
				<ul>
					<li>{this.props.pic}</li>
					<li>{this.props.pic1}</li>
					<li>{this.props.pic2}</li>
					<li>{this.props.pic3}</li>
				</ul>
			</div>
		);
	}
});
module.exports = Photos;
