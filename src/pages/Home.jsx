import React from 'react';
import ChartsList from '../components/ChartsList';

import { connect } from 'react-redux';
import { list } from '../store/charts';
import RecentCharts from '../components/RecentCharts';

class Home extends React.Component {
	state = {
		charts: [],
		listView: false,
		viewIcon: 'grid_on'
	};

	constructor(props) {
		super(props);
	}

	changeView = () => {
		this.setState({
			listView: !this.state.listView,
			viewIcon: this.state.listView ? 'grid_on' : 'list_view'
		});
	};

	updateCharts = () => this.props.list();

	componentDidMount() {
		return this.updateCharts();
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
		const { charts } = this.state;
		const listViewcharts = charts.slice(5, charts.length);
		return (
			<div id="home">
				<section id="recent-charts">
					<RecentCharts charts={charts} />
				</section>

				<section className="mb-3 mt-3 container">
					<ul className="nav nav-pills justify-content-end">
						<li className="nav-item nav-item-50">
							<a className="nav-link" onClick={this.changeView}>
								<i className="material-icons">{this.state.viewIcon}</i>
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
					<ChartsList charts={listViewcharts} listView={this.state.listView} />
				</section>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	charts: state.charts,
	errors: state.errors
});

export default connect(mapStateToProps, { list })(Home);
