var React = require('react');
var ReactDOM = require('react-dom');

var Lifecycle = React.createClass({
	getInitialState: function() {
		alert('getInitialState');
		return {};
	},
	componentWillMount: function() {
		alert('componentWillMount');
	},
	
	render: function() {
		alert('Render');
		return ( <div> WHAAAAT </div> )
	},
	componentDidMount: function() {
		alert('componentDidMount');

	}
});

// ReactDOM.render(
// 	<Lifecycle />,
// 	document.getElementById("lifecycle") 
// );