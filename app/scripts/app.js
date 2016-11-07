import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

export default React.createClass({
	render: function() {
		return (
			<div>
				<div>
					<Header />
					{this.props.children}
				</div>
				<Footer />
			</div>
		);
	}
});