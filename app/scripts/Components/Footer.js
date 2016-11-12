import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<div className="footer">
				<div className="credits">
					<div className="copyright"><p>&copy;2016  Katy Cassidy</p></div>
					<div className="logo"><img src={require('./../../assets/IHTlogo.png')}/></div>
				</div>
			</div>
		);
	}
});