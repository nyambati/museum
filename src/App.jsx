import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import Header from './components/Header';
import LoginPage from './pages/Login';

const App = (
	<Router>
		<Header />
		<Switch>
			<Route exact path="/">
				<LoginPage />
			</Route>
			<Route path="/home">
				<HomePage />
			</Route>
		</Switch>
	</Router>
);

ReactDOM.render(App, document.getElementById('app'));
