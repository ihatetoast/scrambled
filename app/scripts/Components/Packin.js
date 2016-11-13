import React from 'react';
import { Link, hashHistory } from 'react-router';
// import $ from 'jquery'

export default React.createClass({
	render: function() {
		return (
			<section>
				<h4 className="tempPlanningInstructions">TO-DO: List of things to pack</h4>
				<p className="tempPlanningInstructions">After planning, when you're actually packing, this will be a list of all the items you've decided to pack. tap as you pack them. Have the item vanish (DIE!) so that all you see are what is left to do. </p>
				<div className="packListsHolder">
					<h2>Start packin'</h2>
					
				</div>
				<Link to="/"><button className="btnHomeEgg" >Home</button></Link>
			</section>
		);
	}
});

// <label>
// 	<input 
// 	checked = {this.state.user.get('hmStyleSize')==='an apartment, condo, or townhouse'}
// 	onChange={this.editHmStyleSize}
// 	type='radio' 
// 	name='home' 
// 	className='radio' 
// 	value='an apartment, condo, or townhouse' />Apartment, Condo, Townhouse
// </label>