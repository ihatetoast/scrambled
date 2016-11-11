import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

export default React.createClass({
	render: function() {
		return (
			<div>
				<div className="row">
					<Header />
				</div>
				<div className="container">	
					{this.props.children}
				</div>
				<Footer />
			</div>
		);
	}
});