import React from 'react';
import { Link, browserHistory } from 'react-router';
// import $ from 'jquery'

export default React.createClass({
	render: function() {
		return (
			<section>
				<div className="quesListsHolder">
					<h2>Questions to answer</h2>
				</div>
				<Link to="/home"><button className="btnHomeEgg" >Home</button></Link>
			</section>
		);
	}
});