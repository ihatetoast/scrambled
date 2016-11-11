import React from 'react';
import { Link } from 'react-router';
// import $ from 'jquery'

export default React.createClass({
	render: function() {
		return (
			<section>
				<div className="eggBtnHldr">
					<h2>Are you plannin' on scrammin' or packalackin'?</h2>
					<button className="btnHomeEgg">Scrammin'</button>
					<button className="btnHomeEgg">Packalackin'</button>
				</div>
			</section>
		);
	}
});


// <p>When I open, this is what will show so I don't have to look for my packing/prep list.
// 					Tacky  bg red only to aid in box model styling. It will disappear.
// 				</p>
// 				<h3>Whom to bring</h3>
// 				<div>filler div for critter(s)/human component</div>
// 	        	<h3>What to pack</h3>
// 	        	<div>filler div for what to pack and will have results from human/critter attendance</div>
// 	        	<h3>Things to do (v2)</h3>
// 	        	<div>filler div for any events / dates / plans</div>
// 	        	<h3>People to see (v2) </h3>
// 	        	<div>filler div for the people i've made plans with or plan to call</div>
		       
