import React from 'react';
import icon from '../assets/default-icon.jpeg';

export default function Card(props) {
	const chart = props.chart || {};
	const footer = props.footer;
	return (
		<div className="card border-light mb-3">
			<img src={chart.icon || icon} alt="" srcSet="" className="card-img-top" />
			{footer && <div className="card-footer">{chart.name}</div>}
		</div>
	);
}
