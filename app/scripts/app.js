import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

export default React.createClass({
	render: function() {
		return (
			<div>
				<Header />
				<div>	
					{this.props.children}
				</div>
				<Footer />
			</div>
		);
	}
});