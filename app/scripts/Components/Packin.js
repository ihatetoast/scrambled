import React from 'react';
import { Link, hashHistory } from 'react-router';
// import $ from 'jquery'

export default React.createClass({
	render: function() {
		return (
			<section>
				<div className="packListsHolder">
					<Link to="/"><button className="btnHomeEgg" >Home</button></Link>
					<h2>Packin': What do you leave? What do you take?</h2>
					<div className="guncannoli"><img src={require('./../../assets/guncannoli.png')}/></div>		
				</div>
				
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