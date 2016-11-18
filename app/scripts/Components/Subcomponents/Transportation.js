import React from 'react';

export default React.createClass({
	getInitialState: function () {
		return {
			selectedTrans: 'car'
		};
	},
	render: function() {
		return (
			<div>
				<div className="biggerboat">
					<img src={require('./../../../assets/biggerboat1.jpg')}/>
				</div>
				<h3 className="category">Transportation</h3>
				<div className="radio">
					<label>
					<input type="radio" name='transportation' className='radio' value="car" checked={this.state.selectedTrans === 'car'} onChange={this.handleTransChange}/>
					My car
					</label>
				</div>
				<div className="radio">
					<label>
					<input type="radio" name='transportation' className='radio' value="megabus" checked={this.state.selectedTrans === 'megabus'} onChange={this.handleTransChange}/>
					Megabus
					</label>
				</div>
				<div className="radio">
					<label>
					<input type="radio" name='transportation' className='radio' value="motorcycle" checked={this.state.selectedTrans === 'motorcycle'} onChange={this.handleTransChange}/>
					Motorcycle or a biggerboat
					</label>
				</div>

			</div>
			);
	},
	handleTransChange: function (changeEvent) {
		this.setState({
			selectedTrans: changeEvent.target.value,
		});
		//if megabus is chosen, return a form to have the megabus info
	},
	handleFormSubmit: function (formSubmitEvent) {
		formSubmitEvent.preventDefault();
		alert('You have pressed my accommodation button. I am not a finished project. Don\'t judge. I see the shoes you\'re wearing.');
		//see the notes above
	}

});
