import React from 'react';
import { Link, hashHistory } from 'react-router';
import ListSection from './subcomponents/ListSection';
import Lists from './../packingLists';

// import $ from 'jquery' later, tater


/*Note to Mike!just get the entire list to show up to make sure I have this.
I want to not worry too much about format at this time (13 Jan 17) but get it to show up. 
I'll want to have the list edited according to what I choose in plannin' later.
*/

export default React.createClass({
	getInitialState: function() {
		return {
			lists: Lists
		};
	},

	render: function(){
		const lists = this.state.lists.map((item, i) => {
			return (
				<ListSection
					key={item.id}
					id={item.id}
					name={item.name}
					{/*will need to map over the items so they'll appear to tap off*/}
					/>);
		});
		return (
			<div>
				<h1>Tap to clear items as you pack:</h1>
			{/*will need to map over the items so they'll appear to tap off*/}
				{lists}
			</div>
			)
		
	}
});