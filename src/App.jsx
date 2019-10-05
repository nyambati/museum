import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HomePage from './pages/Home';
import Header from './components/Header';
import LoginPage from './pages/Login';
import VewChart from './pages/ViewChart';
import { token } from './api/charts';

const App = (
	<Router history={createBrowserHistory()}>
		<Header />

		<Switch>
			<Route exact path="/">
				{token() && <Redirect to="/home" />}
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
