import React from 'react';
import { Link, hashHistory } from 'react-router';
// import $ from 'jquery'

export default React.createClass({
	render: function() {
		return (
			<section>
				<div className="packListsHolder">
					<Link to="/"><button className="homeEggBtn" >Home</button></Link>
					<h2>Packin': What do you leave? What do you take?</h2>
					<div className="guncannoli"><img src={require('./../../assets/guncannoli.png')}/></div>		
				</div>
				<div className="tempDummyList">
				<h5 className="tempPlanningInstructions">I'm a dummy list for styling</h5>
				<p className="tempPlanningInstructions">Should be borem ipsum, but I'm full of piss and vinegar, so you get a dummy list. My app; my rules.</p>
				<h2>Packing list</h2>
				<p>Tap as you pack. Items will disappear or change to strike-through. I have not yet decided.</p>
					<ul>
						<li className="category">Always take</li>
							<ul className="subcategory">
								<li>Beep bop boop</li>
								<li>Yeep yop yoop</li>
								<li>Deep dop doop</li>
							</ul>
						<li className="category">Pet supplies</li>
							<ul className="subcategory">
								<li>Poop poo pooper</li>
								<li>Peep pee peeper</li>
							</ul>
						<li className="category">Slacker garb</li>
							<ul className="subcategory">
								<li>Blah blah blah</li>
								<li>Yadda yadda yadda</li>
								<li>Whatevs</li>
							</ul>
						<li className="category">Haiku</li>
							<ul className="subcategory">
								<li>I am done with lists</li>
								<li>Now I need to style this app</li>
								<li>Then I deal with props.</li>
							</ul>

					</ul>
				</div>
				<button className="btnEgg minorBtnEgg" type="submit"><img src={require('./../../assets/refresh.png')}/></button>
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