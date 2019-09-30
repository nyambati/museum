import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import Header from './components/Header';

const settings = {
	organisation: ''
};

const App = (
	<Router>
		<Header settings={settings} />
		<Switch>
			<Route path="/">
				<HomePage />
			</Route>
		</Switch>
	</Router>
);

ReactDOM.render(App, document.getElementById('app'));
