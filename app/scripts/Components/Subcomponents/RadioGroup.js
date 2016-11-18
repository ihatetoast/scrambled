

/*
/ *********************************** /
//   notes for props and iterating   //
/ *********************************** /

Problem: I'm repeating myself
		The code below is repeated too much. 
		<div className="radio">
			<label>
				<input type="radio" name='transportation' className='radio' value="car" checked={this.state.selectedTrans === 'car'} onChange={this.handleTransChange}/>
				My car
			</label>
		</div>

Solution: DRY OUT
	make a generic component for a group of radio buttons.
	pass in an array (via props) to specify the labels of each radio button in the group

	const transportation = [
	    { label: 'my car', value: 'car' },
	    { label: 'Megabus', value: 'megabus' },
	    { label: 'my motorcycle or a bigger boat', value: 'motorcycle' }
	];
	const accommodation = [
		{ label: 'with Pooh', value: 'pooh' },
	    { label: 'with Dad and Ellen\'s', value: 'dad' },
	    { label: 'with Mary and Jeff', value: 'mary' },
	    { label: 'at La Quinta or The Overlook', value: 'la quinta' }
	];
	const pets = [
	    { label: 'all the critters', value: 'critters' },
	    { label: 'just the hounds', value: 'hounds' },
	    { label: 'just the cats', value: 'cats' },
	    { label: 'just myself', value: 'me' }
	];
	const running =[
		{ label: 'running', value: 'running' },
		{ label: 'slacking', value: 'slacking' }
	];
	const goingOut =[
		{ label: 'going out', value: 'going out' },
		{ label: 'staying in', value: 'staying in' }
	];

	<RadioGroup name="transportation" onChange={this.handleTransChange} value={this.state.selectedTrans} options={transportation} />

	create a component called `RadioGroup` that uses those props to re-create that same code you just shared



*/