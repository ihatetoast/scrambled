import React from 'react';
import { Link, hashHistory } from 'react-router';
// import $ from 'jquery'

export default React.createClass({
	render: function() {
		return (
			<section>
				<div className="quesListsHolder">
					<h2>Questions to answer</h2>
					<ul>
						<li>yes/no questions that will lead to retrieval of certain lists.</li>
						<li>checkboxes so that my choices remain until i submit. submiiiiiit to the choices!</li>
						<li>series of yes/no questions that will lead to retrieval of certain lists.</li>
					</ul>
				</div>
				<Link to="/"><button className="btnHomeEgg" >Home</button></Link>
			</section>
		);
	}
});