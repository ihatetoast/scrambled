// this will be the a list section and it and its mates will make up the larger list

import React from 'react';
import {Link} from 'react-router';


export default React.createClass({
	render: function() {
		return (
			<div>
				<p>Sublist: {this.props.name}</p>
				{/*will need to map over the items so they'll appear to tap off*/}
			</div>
			);
	}
});

// later make the list items file in for packign items
// <ul>
// 	<li></li>
// </ul>