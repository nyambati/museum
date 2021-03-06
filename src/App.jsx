import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './pages/Home';
import Header from './components/Header';
import LoginPage from './pages/Login';
import VewChart from './pages/ViewChart';
import { token } from './store/charts';
import store from './store';
import { history } from './store';

const App = (
	<Provider store={store}>
		<Router history={history}>
			<Header />
			<Switch>
				<Route exact path="/">
					{token() && <Redirect to="/home" />}
					<LoginPage />
				</Route>
				<Route exact path="/home">
					<HomePage />
				</Route>
				<Route exact path="/view/:name" component={VewChart} />
				<Redirect from="*" to="/home" />
			</Switch>
		</Router>
	</Provider>
);

ReactDOM.render(App, document.getElementById('app'));
