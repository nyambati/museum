import React, { useEffect } from 'react';
import ChartsList from '../components/ChartsList';

import { connect } from 'react-redux';
import { list, changeView } from '../store/charts';
import RecentCharts from '../components/RecentCharts';

const HomePage = (props) => {
	const { list, changeView, viewIcon, listView } = props;
	useEffect(() => {
		list();
	});
	return (
		<div id="home">
			<section id="recent-charts">
				<RecentCharts />
			</section>

			<section className="mb-3 mt-3 container">
				<ul className="nav nav-pills justify-content-end">
					<li className="nav-item nav-item-50">
						<a className="nav-link" onClick={changeView}>
							<i className="material-icons">{viewIcon}</i>
						</a>
					</li>
					<li className="nav-item nav-item-50">
						<a className="nav-link">
							<i className="material-icons">sort_by_alpha</i>
						</a>
					</li>
					<li className="nav-item nav-item-50">
						<a className="nav-link">
							<i className="material-icons">folder_open</i>
						</a>
					</li>
				</ul>
			</section>
			<section className="container" id="chart-list">
				<ChartsList listView={listView} />
			</section>
		</div>
	);
};

const mapStateToProps = (state) => ({
	errors: state.errors,
	upload: state.upload,
	listView: state.listView,
	viewIcon: state.viewIcon
});

export default connect(mapStateToProps, { list, changeView })(HomePage);
