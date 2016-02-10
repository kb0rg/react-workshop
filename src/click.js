var React = require('react');
var ReactDOM = require('react-dom');

var ClickCounter = React.createClass({
	getInitialState: function () {
		return {
			clicks: 0
		};
	},

	handleBtnClick: function () {
		this.setState({
			clicks: this.state.clicks + 1
		});	
	},

	render: function() {
		return (
			<div>
				<button 
					onClick = { this.handleBtnClick }
					className="btn btn-primary">
					{ this.props.text } <span className="badge"> { this.state.clicks } </span>
				</button>
				<ClickCounterCaption num = {this.state.clicks} /> 
			</div>
		);
	}
});

var ClickCounterCaption = React.createClass({
	render: function () {
		return (
			<div> Number of Clicks: {this.props.num} </div>
			);
	}
});

ReactDOM.render(
	< ClickCounter text="Clicks!" />,
	document.getElementById("click-counter")
);

ReactDOM.render(
	< ClickCounter text="BOOOO!" />,
	document.getElementById("boos")
);

ReactDOM.render(
	< ClickCounter text="Hooray!" />,
	document.getElementById("yays")
);