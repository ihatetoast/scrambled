import React from 'react';

export default React.createClass({
	getInitialState: function () {
		return {
			selectedRun: "run"
		};
	},
	render: function(){
		return(
			<div>
				<h3  className="category">I hope to </h3>
				<div className="radio">
					<label>
					<input type="radio" name='run' className='radio' value="run" checked={this.state.selectedRun === "run"} onChange={this.handleRun}/>
					run
					</label>
				</div>
				<div className="radio">
					<label>
					<input type="radio" name='run' className='radio' value="slack" checked={this.state.selectedRun === "slack"} onChange={this.handleRun}/>
					slack
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
