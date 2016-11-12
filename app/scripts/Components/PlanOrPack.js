import React from 'react';
import { Link } from 'react-router';
// import $ from 'jquery'

export default React.createClass({
	render: function() {
		return (
			<section>
				<div className="eggBtnHldr">
					<h2>Are you plannin' on scrammin' or packalackin'?</h2>
					<Link to="/scrammin"><button className="btnHomeEgg" >Scrammin'</button></Link>
					<Link to="/packin"><button className="btnHomeEgg">Packalackin'</button></Link>
				</div>
			</section>
		);
	}
});

