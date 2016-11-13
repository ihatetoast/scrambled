// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';

import App from './app';
import Home from './Components/Home';
import Packin from './Components/Packin';
import Plannin from './Components/Plannin';


const router = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/plannin" component={Plannin}/>
			<Route path="/packin" component={Packin}/>
		</Route>
	</Router>
);

ReactDOM.render(router, document.getElementById('entry'));

