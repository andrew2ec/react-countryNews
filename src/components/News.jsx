var React = require('react');

var News = React.createClass({
	render: function(){
		return(
			<div>
				<div>
					{this.props.badge}
					<h1>{this.props.title}</h1>
				</div>
				<div>
					<h2>{this.props.subtitle}</h2>
				</div>
				<div>
					<p>{this.props.content}</p>
				</div>
				<div>
					{this.props.pic1}
					{this.props.pic2}
				</div>
				<div>
					<h3>{this.props.location}</h3>
				</div>
			</div>
		);
	}
});
module.exports = News;
