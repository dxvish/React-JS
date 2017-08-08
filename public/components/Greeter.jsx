var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

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

module.exports = Greeter
