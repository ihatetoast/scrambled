import React from 'react';

export default React.createClass({
	getInitialState: function () {
		return {
			selectedRun: "I plan on running"
		};
	},
	render: function(){
		return(
			<div>
				<h3  className="category">In terms of exercise, I plan on</h3>
				<div className="radio">
					<label>
					<input type="radio" name='run' className='radio' value="I plan on running" checked={this.state.selectedRun === "I plan on running"} onChange={this.handleRun}/>
					running
					</label>
				</div>
				<div className="radio">
					<label>
					<input type="radio" name='run' className='radio' value="I plan on slacking" checked={this.state.selectedRun === "I plan on slacking"} onChange={this.handleRun}/>
					slacking
					</label>
				</div>
				<hr className="borderVee"/>
			</div>
		)
	},

	handleRun: function (changeEvent) {
		this.setState({
			selectedRun: changeEvent.target.value,
		});
		//running list
	}

})
