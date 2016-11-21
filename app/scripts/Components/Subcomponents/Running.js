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
				<h3  className="category">I hope to (replace with egg pic)</h3>
				<div className="eggPics">
					<img src={'https://s-media-cache-ak0.pinimg.com/originals/09/27/25/0927254cdf307b6a672955605b29bac5.jpg'}/>
				</div>
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
