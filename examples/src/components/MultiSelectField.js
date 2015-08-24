import React from 'react';
import Select from 'react-select';

var MultiSelectField = React.createClass({
	displayName: 'MultiSelectField',
	propTypes: {
		label: React.PropTypes.string,
	},
	getInitialState () {
		return {
			disabled: false,
			value: []
		};
	},
	handleSelectChange (value, values) {
		logChange('New value:', value, 'Values:', values);
		this.setState({ value: value });
	},
	toggleDisabled (e) {
		this.setState({ 'disabled': e.target.checked });
	},
	render () {
		var ops = [
			{ label: 'Chocolate', value: 'chocolate' },
			{ label: 'Vanilla', value: 'vanilla' },
			{ label: 'Strawberry', value: 'strawberry' },
			{ label: 'Caramel', value: 'caramel' },
			{ label: 'Cookies and Cream', value: 'cookiescream' },
			{ label: 'Peppermint', value: 'peppermint' }
		];
		return (
			<span>
				<div>
					<label>{this.props.label}</label>
					<Select multi={true} disabled={this.state.disabled} value={this.state.value} placeholder="Select your favourite(s)" options={ops} onChange={this.handleSelectChange} />
				</div>
				<div>
					<input type="checkbox" checked={this.state.disabled} id="disable-multiselect" onChange={this.toggleDisabled}/>
					<label htmlFor="disable-multiselect">Disable</label>
				</div>
			</span>
		);
	}
});

module.exports = MultiSelectField;