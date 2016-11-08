import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div className="headerWithEggs">
				<img src={require('./../../assets/broken_egg.png')}/>
				<h1 className="scrambledWithEggs">Scrambled</h1>
				<img src={require('./../../assets/whole_egg.png')}/>
			</div>
		);
	}
});