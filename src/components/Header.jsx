var React = require('react');

var Header = React.createClass({
	render: function(){
		return(
			<div>
				<div>
					<h1>Country News</h1>
				</div>
				<div>
					<p>Top stories in my country</p>
				</div>
				<div>
					<ul>
						<li>NEWS</li>
						<li>PHOTOS</li>
					</ul>
						{this.props.children}
				</div>
			</div>
		);
	}
});
module.exports = Header;
