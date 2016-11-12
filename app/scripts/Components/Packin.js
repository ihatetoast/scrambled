import React from 'react';
import { Link, hashHistory } from 'react-router';
// import $ from 'jquery'

export default React.createClass({
	render: function() {
		return (
			<section>
				<div className="quesListsHolder">
					<h2>list of things to pack</h2>
					
				</div>
				<Link to="/"><button className="btnHomeEgg" >Home</button></Link>
			</section>
		);
	}
});