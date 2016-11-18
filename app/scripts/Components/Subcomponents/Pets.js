import React from 'react';

export default React.createClass({
	getInitialState: function () {
		return {
			selectedPets: 'hounds and cats'
		};
	},
	render: function(){
		return(
			<div>
				<h3  className="category">Passengers</h3>
				<div className="radio">
					<label>
					<input type="radio" name='pets' className='radio' value="hounds and cats" checked={this.state.selectedPets === "hounds and cats"} onChange={this.handlePets}/>
					Hounds and cats
					</label>
				</div>
				<div className="radio">
					<label>
					<input type="radio" name='pets' className='radio' value="just hounds" checked={this.state.selectedPets === "just hounds"} onChange={this.handlePets}/>
					Just the hounds
					</label>
				</div>
				<div className="radio">
					<label>
					<input type="radio" name='pets' className='radio' value="just cats" checked={this.state.selectedPets === "just cats"} onChange={this.handlePets}/>
					Just the cats
					</label>
				</div>
				<div className="radio">
					<label>
					<input type="radio" name='pets' className='radio' value="no pets" checked={this.state.selectedPets === "no pets"} onChange={this.handlePets}/>
					No pets
					</label>
				</div>
			</div>
			)
	},
	handlePets: function (changeEvent) {
		this.setState({
			selectedPets: changeEvent.target.value,
		});
		// have 2, 1, or 0 lists
	},
	handleFormSubmit: function (formSubmitEvent) {
		formSubmitEvent.preventDefault();
		alert('You have pressed my accommodation button. I am not a finished project. Don\'t judge. I see the shoes you\'re wearing.');
		//see the notes above
	}

})
