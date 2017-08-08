var React = require('react');
var ReactDOM = require('react-dom');
//imports the components from the folder
var Greeter = require('Greeter')

ReactDOM.render(
	<Greeter/>,
	document.getElementById('app')
);
