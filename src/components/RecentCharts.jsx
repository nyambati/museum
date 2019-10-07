import React from 'react';
import { connect } from 'react-redux';
import UploadCharts from '../components/UploadCharts';
import Card from './Card';

const RecentCharts = ({ charts }) => {
	return (
		<div className="container">
			<p id="rc-text">Recent Charts</p>
			<div className="row">
				<UploadCharts />
				{charts.slice(0, 5).map((chart) => (
					<div className="col-sm-2" key={chart.name}>
						<Card chart={chart} />
						<div className="chart-footer mb-4">
							<p>
								{chart.name} {chart.version}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

RecentCharts.defaultProps = {
	charts: []
};

export default connect((state) => ({ charts: state.charts }))(RecentCharts);
