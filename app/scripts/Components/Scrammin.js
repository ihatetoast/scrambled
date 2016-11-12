import React from 'react';
import { Link, hashHistory } from 'react-router';
// import $ from 'jquery'

export default React.createClass({
	render: function() {
		return (
			<section>
				<h4 className="tempPlanningInstructions">TO-DO: Questions to answer</h4>
					<p className="tempPlanningInstructions">This is your page where you'll start the planning from. You'll answer questions that'll lead to lists. You'll tap on items you want to omit this trip. You'll add items that might be one-offs (gifts, food, foster hounds' stuff). This is planning and deciding.</p>
					<ul>
						<li className="tempPlanningInstructions">yes/no questions that will lead to retrieval of certain lists.</li>
						<li className="tempPlanningInstructions">checkboxes so that my choices remain until i submit. submiiiiiit to the choices!</li>
						<li className="tempPlanningInstructions">series of yes/no questions that will lead to retrieval of certain lists.</li>
					</ul>
				<div className="scramListsHolder">
					<h3>Watcha doin'? Who's goin'?</h3>
				</div>
				<Link to="/"><button className="btnHomeEgg" >Home</button></Link>
			</section>
		);
	}
});