import React from 'react';

export default (props) => (
	<nav className="navbar navbar-expand-lg navbar-primary bg-primary fixed-top">
		<i className="material-icons md-48">view_headline</i>
		<div className="container">
			<a className="navbar-brand" href="#">
				{props.settings.organisation || 'ChartMuseum'}
			</a>
		</div>
	</nav>
);
