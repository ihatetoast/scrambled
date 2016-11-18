import React from 'react';

export default React.createClass({
	getInitialState: function () {
		return {
			selectedRun: 'yes'
		};
	},
	render: function(){
		return(
			<div>
				<h3  className="category">Exercise</h3>
				<div className="radio">
					<label>
					<input type="radio" name='run' className='radio' value="yes" checked={this.state.selectedRun === "yes"} onChange={this.handleRun}/>
					Running
					</label>
				</div>
				<div className="radio">
					<label>
					<input type="radio" name='run' className='radio' value="no" checked={this.state.selectedRun === "no"} onChange={this.handleRun}/>
					Slacking
					</label>
				</div>
			</div>
		)
	},

	handleRun: function (changeEvent) {
		this.setState({
			selectedRun: changeEvent.target.value,
		});
		//running list
	},
	handleFormSubmit: function (formSubmitEvent) {
		formSubmitEvent.preventDefault();
		alert('You have pressed my buttons. I am not a finished project. Don\'t judge. I see the shoes you\'re wearing.');
		//see the notes above
	}

})
