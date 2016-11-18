import React from 'react';

export default React.createClass({
	getInitialState: function () {
		return {
			selectedGoingOut: 'yes'
		};
	},
	render: function(){
		return(
			<div>
				<h3  className="category">Socializing</h3>
				<div className="radio">
					<label>
					<input type="radio" name='fancy' className='radio' value="yes" checked={this.state.selectedGoingOut === "yes"} onChange={this.handleGoingOut}/>
					Sure
					</label>
				</div>
				<div className="radio">
					<label>
					<input type="radio" name='fancy' className='radio' value="no" checked={this.state.selectedGoingOut === "no"} onChange={this.handleGoingOut}/>
					Nerp
					</label>
				</div>
			</div>	
		)
	},	
	handleGoingOut: function (changeEvent) {
		this.setState({
			selectedGoingOut: changeEvent.target.value,
		});
		//bling list
	},
	handleFormSubmit: function (formSubmitEvent) {
		formSubmitEvent.preventDefault();
		alert('You have pressed my buttons. I am not a finished project. Don\'t judge. I see the shoes you\'re wearing.');
		//see the notes above
	}

})
