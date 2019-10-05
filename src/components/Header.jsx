import React from 'react';
import { Redirect } from 'react-router-dom';
import { token } from '../api/charts';
import { Link } from 'react-router-dom';
export default (props) => {
	const auth = token();
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
			{!auth && <Redirect to="/" />}
			<i className="material-icons md-48">view_headline</i>
			<div className="container">
				<Link to="/home" className="navbar-brand">
					ChartMuseum
				</Link>
			</div>
		</nav>
	);
};
