import React from 'react';
import { withRouter } from 'react-router-dom';
import icon from '../assets/default-icon.jpeg';

export default withRouter(({ footer, chart, history }) => {
	return (
		<div
			className="card border-light mb-3"
			onClick={() =>
				history.push({
					pathname: `/view/${chart.name}`,
					search: `?version=${chart.version}`
				})}
		>
			<img src={chart.icon || icon} alt="" srcSet="" className="card-img-top" />
			{footer && (
				<div className="card-footer">
					{chart.name} {chart.version}
				</div>
			)}
		</div>
	);
});
