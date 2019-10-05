import React from 'react';
import { Redirect } from 'react-router-dom';
import { token } from '../api/charts';

export default (props) => {
	const auth = token();
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
			{!auth && <Redirect to="/" />}
			<i className="material-icons md-48">view_headline</i>
			<div className="container">
				<a className="navbar-brand" href="/home">
					ChartMuseum
				</a>
			</div>
		</nav>
	);
};
