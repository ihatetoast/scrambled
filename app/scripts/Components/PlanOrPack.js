import React from 'react';
import { Link, hashHistory } from 'react-router';
// import $ from 'jquery'

export default React.createClass({
	render: function() {
		return (
			<section>
				<div className="eggBtnHldr">
					<h2>Are you plannin' or packalackin?</h2>
					<Link to="/plannin"><button className="btnEgg majorBtnEgg" >Plannin'</button></Link>
					<Link to="/packin"><button className="btnEgg majorBtnEgg">Packalackin'</button></Link>
				</div>
			</section>
		);
	}
});

