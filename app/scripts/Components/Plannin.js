/*
/ *********************************** /
//   notes for props and iterating   //
/ *********************************** /

Problem: I'm repeating myself
		The code below is repeated too much. 
		<div className="radio">
			<label>
				<input type="radio" name='transportation' className='radio' value="car" checked={this.state.selectedTrans === 'car'} onChange={this.handleTransChange}/>
				My car
			</label>
		</div>

Solution: DRY OUT
	make a generic component for a group of radio buttons.
	pass in an array (via props) to specify the labels of each radio button in the group

	const transportation = [
	    { label: 'My car', value: 'car' },
	    { label: 'Megabus', value: 'megabus' },
	    { label: 'Motorcycle', value: 'motorcycle' }
	];

	<RadioGroup name="transportation" onChange={this.handleTransChange} value={this.state.selectedTrans} options={transportation} />

	create a component called `RadioGroup` that uses those props to re-create that same code you just shared



*/
import React from 'react';
import { Link, hashHistory } from 'react-router';
// import $ from 'jquery'

import Transportation from './Subcomponents/Transportation';
import Accommodation from './Subcomponents/Accommodation';
import Pets from './Subcomponents/Pets';
import Running from './Subcomponents/Running';
import Goingout from './Subcomponents/Goingout';

export default React.createClass({
	render: function() {
		return (
			<section>
				<div className="scramListsHolder">
					<Link to="/"><button className="homeEggBtn" >Home</button></Link>
					<h2>How you gonna get there? Who's goin'? Watcha doin'?</h2>
						<Transportation />
						<Accommodation />
						<Pets />
						<Running />
						<Goingout />
					<form onSubmit={this.handleFormSubmit}>
						<button className="btnEgg minorBtnEgg" type="submit">Save</button>
					</form>	
				</div>
			</section>
		);
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
});