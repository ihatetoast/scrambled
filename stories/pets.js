import React from 'react';

export default React.createClass({
	getInitialState: function () {
		return {
			selectedPets: "all the critters"
		};
	},
	render: function(){
		return(
			<div>
				<h3  className="category">I'm taking (will be egg pic)</h3>
				<div className="eggPics">
					<img src={'https://cinemeccanica.files.wordpress.com/2012/02/peewee-soap.jpg'}/>
				</div>
				<div className="radio">
					<label>
					<input type="radio" name='pets' className='radio' value="all the critters" checked={this.state.selectedPets === "all the critters"} onChange={this.handlePets}/>
					all the critters
					</label>
				</div>
				<div className="radio">
					<label>
					<input type="radio" name='pets' className='radio' value="just the hounds" checked={this.state.selectedPets === "just the hounds"} onChange={this.handlePets}/>
					just the hounds
					</label>
				</div>
				<div className="radio">
					<label>
					<input type="radio" name='pets' className='radio' value="just the cats" checked={this.state.selectedPets === "just the cats"} onChange={this.handlePets}/>
					just the cats
					</label>
				</div>
				<div className="radio">
					<label>
					<input type="radio" name='pets' className='radio' value="just myself" checked={this.state.selectedPets === "just myself"} onChange={this.handlePets}/>
					just myself
					</label>
				</div>
				<hr className="borderVee"/>
			</div>
			)
	},
	handlePets: function (changeEvent) {
		this.setState({
			selectedPets: changeEvent.target.value,
		});
		// have 2, 1, or 0 lists
	}

})
