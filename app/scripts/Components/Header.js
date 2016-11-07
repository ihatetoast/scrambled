import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div>
				<Link to="/"><h1>Scrambled</h1></Link>
			</div>
		);
	}
});