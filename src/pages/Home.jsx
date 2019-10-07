import React from 'react';
import ChartsList from '../components/ChartsList';

import { connect } from 'react-redux';
import { list, changeView } from '../store/charts';
import RecentCharts from '../components/RecentCharts';

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.list();
	}

	renderAlertMessage() {
		return (
			<section>
				<div class="alert alert-dismissible alert-danger container mb-3 mt-3">
					<button type="button" class="close" data-dismiss="alert">
						&times;
					</button>
					<strong>Oh snap!</strong>{' '}
					<a href="#" class="alert-link">
						Change a few things up
					</a>{' '}
					and try submitting again.
				</div>
			</section>
		);
	}

	render() {
		const { charts, viewIcon, listView, changeView } = this.props;
		return (
			<div id="home">
				<section id="recent-charts">
					<RecentCharts charts={charts} />
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
	}
}

const mapStateToProps = (state) => ({
	charts: state.charts,
	errors: state.errors,
	upload: state.upload,
	listView: state.listView,
	viewIcon: state.viewIcon
});

export default connect(mapStateToProps, { list, changeView })(Home);
