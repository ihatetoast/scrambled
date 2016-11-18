import React from 'react';

export default React.createClass({
	getInitialState: function () {
		return {
			selectedGoingOut: 'going out'
		};
	},
	render: function(){
		return(
			<div>
				<h3  className="category">I plan on </h3>
				<div className="radio">
					<label>
					<input type="radio" name='fancy' className='radio' value="going out" checked={this.state.selectedGoingOut === "going out"} onChange={this.handleGoingOut}/>
					going out
					</label>
				</div>
				<div className="radio">
					<label>
					<input type="radio" name='fancy' className='radio' value="staying in" checked={this.state.selectedGoingOut === "staying in"} onChange={this.handleGoingOut}/>
					staying in
					</label>
				</div>
				<hr className="borderVee"/>
			</div>	
		)
	},	
	handleGoingOut: function (changeEvent) {
		this.setState({
			selectedGoingOut: changeEvent.target.value,
		});
		//bling list
	}
})
