import React from 'react';
import { Link, hashHistory } from 'react-router';
// import $ from 'jquery'

export default React.createClass({
	getInitialState: function () {
		return {
			selectedTrans: 'car',
			selectedRes: 'pooh',
			selectedPets: 'hounds and cats',
			selectedRun: 'yes',
			selectedGoingOut: 'yes'
		};
	},
	render: function() {
		return (
			<section>
				<div className="scramListsHolder">
					<h3>How you gonna get there? Who's goin'? Watcha doin'?</h3>
					<form onSubmit={this.handleFormSubmit}>
						<h3>How are you getting to Dallas?</h3>
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
							Motorcycle
							</label>
						</div>
						<h3>Where are you staying?</h3>
						<div className="radio">
							<label>
							<input type="radio" name='residence' className='radio' value="pooh" checked={this.state.selectedRes === 'pooh'} onChange={this.handleResChange}/>
							Pooh's
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" name='residence' className='radio' value="dad" checked={this.state.selectedRes === 'dad'} onChange={this.handleResChange}/>
							Dad and Ellen's
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" name='residence' className='radio' value="mary" checked={this.state.selectedRes === 'mary'} onChange={this.handleResChange}/>
							Mary and Jeff's
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" name='residence' className='radio' value="la quinta" checked={this.state.selectedRes === 'la quinta'} onChange={this.handleResChange}/>
							La Quinta
							</label>
						</div>
						<h3>Who is going?</h3>
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
						<h3>Are you going to run?</h3>
						<div className="radio">
							<label>
							<input type="radio" name='run' className='radio' value="yes" checked={this.state.selectedRun === "yes"} onChange={this.handleRun}/>
							Yes
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" name='run' className='radio' value="no" checked={this.state.selectedRun === "no"} onChange={this.handleRun}/>
							No
							</label>
						</div>
						<h3>Are you going out?</h3>
						<div className="radio">
							<label>
							<input type="radio" name='fancy' className='radio' value="yes" checked={this.state.selectedGoingOut === "yes"} onChange={this.handleGoingOut}/>
							Why not?
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" name='fancy' className='radio' value="no" checked={this.state.selectedGoingOut === "no"} onChange={this.handleGoingOut}/>
							Hell no.
							</label>
						</div>
						<button className="btnEggHome" type="submit">Save</button>
					</form>	
				</div>
			</section>
		);
	},
	handleTransChange: function (changeEvent) {
		this.setState({
			selectedTrans: changeEvent.target.value,
		});
		//if megabus is chosen, return a form to have the megabus info
	},
	handleResChange: function (changeEvent) {
		this.setState({
			selectedRes: changeEvent.target.value,
		});
		//have the name at top of the list
		//also give the list that always goes
	},
	handlePets: function (changeEvent) {
		this.setState({
			selectedPets: changeEvent.target.value,
		});
		// have 2, 1, or 0 lists
	},
	handleRun: function (changeEvent) {
		this.setState({
			selectedRun: changeEvent.target.value,
		});
		//running list
	},
	handleGoingOut: function (changeEvent) {
		this.setState({
			selectedGoingOut: changeEvent.target.value,
		});
		//bling list
	},
	handleFormSubmit: function (formSubmitEvent) {
		formSubmitEvent.preventDefault();
		console.log('You have pressed my buttons.');
		//see the notes above
	}
});