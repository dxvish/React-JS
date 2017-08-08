var React = require('react');
var GreeterMessage = React.createClass({
	render: function(){
		return (
			<div>
				<h2>Hello {this.props.name}</h2>
				<p>{this.props.body}</p>
			</div>
		);
	}
}
);
module.exports = GreeterMessage
