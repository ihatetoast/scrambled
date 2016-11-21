import React from 'react';
import { Link, hashHistory } from 'react-router';
import Lists from './../packingLists';

// import $ from 'jquery'

export default React.createClass({
	getInitialState: function(){
		let list = Lists.filter((list, i)=>{
			if(list.include === "yes"){
				console.log("list name is "+list.name+" list items are "+list.items);//sweet!
				return true;
			} else{
				return false;
			}
		});
		return{list: list}
	},
	render: function() {
		const listName = this.state.list.name.map((name, i)=>{
			return(
				<li className="listName" key={i}>{this.state.list.name[i]}</li>
			);
		});
		const listItems = this.state.list.items.map((item, i)=>{
			return(
				<li className="listItems" key={i}>{this.state.list.items[i]}</li>
				);
		});
		return (
			<section>
				<div className="packListsHolder">
					<Link to="/"><button className="homeEggBtn" >Home</button></Link>
					<h2>Packin': What do you leave? What do you take?</h2>
					<div className="guncannoli"><img src={require('./../../assets/guncannoli.png')}/></div>		
				</div>
					<ul>
						{listName}
						<ul>
							{listItems}
						</ul>
					</ul>
			
				<button className="btnEgg minorBtnEgg" type="submit"><img src={require('./../../assets/refresh.png')}/></button>
			</section>
		);
	}
});



				

