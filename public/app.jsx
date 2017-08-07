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
var Greeter = React.createClass({
handleNewName: function(name,body){
	this.setState({
		name:name,
		body:body
	});
},
getInitialState : function(){
return {
	name: this.props.name,
	body : this.props.body
};
},
getDefaultProps: function(){
return {
	name: "Vishnu",
	body: "My Paragraph"
};
},
render: function(){
var name = this.state.name;
var body = this.state.body;
return (
	<div>
		<GreeterMessage name={name} body ={body}/>
		<GreeterForm onNewName={this.handleNewName}/>
</div>
);
}
});
ReactDOM.render(
	<Greeter/>,
	document.getElementById('app')
);
