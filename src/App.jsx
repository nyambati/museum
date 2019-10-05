import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/Home';
import Header from './components/Header';
import LoginPage from './pages/Login';
import VewChart from './pages/ViewChart';

const App = (
	<Router>
		<Header />

		<Switch>
			<Route exact path="/">
				<LoginPage />
			</Route>
			<Route exact path="/home">
				<HomePage />
			</Route>
			<Route exact path="/view">
				<VewChart />
			</Route>
		</Switch>
	</Router>
);

ReactDOM.render(App, document.getElementById('app'));
