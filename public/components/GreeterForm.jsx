var React = require('react');

var GreeterForm = React.createClass({
	onFormSubmit:function(event){
		event.preventDefault();
		var name = this.refs.name.value;
		var body = this.refs.body.value;
		if (name.length > 0){
			this.refs.name.value = "";
			this.refs.body.value = "";
			this.props.onNewName(name,body);
		}
	},
	render:function(){
		return (
			<form onSubmit ={this.onFormSubmit}>
				<input type="text" ref="name" placeholder="Enter the Name"/><br/>
				<textarea ref="body" placeholder="Enter the Description"></textarea>
				<button>Show Names</button>
			</form>
		);
	}
});
module.exports = GreeterForm
