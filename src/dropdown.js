var React = require('react');
var ReactDOM = require('react-dom');

var stylingReactive = {
	opened: { 
		display: 'block'
	},
	closed: { 
		display: 'none' 
	}
};

var DropdownMenu = React.createClass({
	getInitialState: function() {
		return { isOpen: false };
	},
	// Toggle DropdownMenu's open/closed state 
	toggleMenu: function() {
		this.setState({ isOpen: !this.state.isOpen });
	},
	render: function() {
		return (
			<div className='dropdown-wrapper' onClick={ this.toggleMenu }>
				<button className='btn btn-info'>
					Dropdown Menu
				</button>
				<ul style={ this.state.isOpen ? stylingReactive.opened: stylingReactive.closed }>
					<li>Option #1</li>
					<li>Option #2</li>
					<li>Option #3</li>
				</ul>
			</div>
		);
	}
});

ReactDOM.render(<DropdownMenu />, document.getElementById('dropdown-menu'))