import React from 'react';

export default React.createClass({
	getInitialState: function () {
		return {
			selectedAccom: 'pooh'
		};
	},
	render: function() {
		return (
			<div>
				<div className="biggerboat">
					<img src={require('./../../../assets/shining-twins_living.jpg')}/>
				</div>
				<h3  className="category">Accommodation</h3>
				<div className="radio">
					<label>
					<input type="radio" name='accommodation' className='radio' value="pooh" checked={this.state.selectedAccom === 'pooh'} onChange={this.handleResChange}/>
					Pooh's
					</label>
				</div>
				<div className="radio">
					<label>
					<input type="radio" name='accommodation' className='radio' value="dad" checked={this.state.selectedAccom === 'dad'} onChange={this.handleResChange}/>
					Dad and Ellen's
					</label>
				</div>
				<div className="radio">
					<label>
					<input type="radio" name='accommodation' className='radio' value="mary" checked={this.state.selectedAccom === 'mary'} onChange={this.handleResChange}/>
					Mary and Jeff's
					</label>
				</div>
				<div className="radio">
					<label>
					<input type="radio" name='accommodation' className='radio' value="la quinta" checked={this.state.selectedAccom === 'la quinta'} onChange={this.handleResChange}/>
					La Quinta or The Overlook
					</label>
				</div>
			</div>
		);
	},
	handleResChange: function (changeEvent) {
		this.setState({
			selectedAccom: changeEvent.target.value,
		});
		//have the name at top of the list
		//also give the list that always goes
	},
	handleFormSubmit: function (formSubmitEvent) {
		formSubmitEvent.preventDefault();
		alert('You have pressed my accommodation button. I am not a finished project. Don\'t judge. I see the shoes you\'re wearing.');
		//see the notes above
	}
});

