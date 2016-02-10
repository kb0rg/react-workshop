var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({

	render: function(){
		return(
			<div>
				<h1>{ this.props.title }</h1>
				<div>Text for all instances of this class!</div>
			</div>
			);
	}
});

ReactDOM.render(
	<Hello title = "This title is a prop of this instance of class Hello"/>,
	document.getElementById("hello") 
);

ReactDOM.render(
	<Hello title = "This is a second instance of Hello"/>,
	document.getElementById("hello2") 
);