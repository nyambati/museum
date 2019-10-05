import React from 'react';
import Card from '../components/Card';
import CardList from '../containers/CardList';

import { list } from '../api/charts';
import AddChart from '../components/AddChart';

export default class Home extends React.Component {
	state = {
		charts: [],
		listView: false,
		viewIcon: 'grid_on',
		recentSize: 5
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

	updateCharts = () => {
		return list().then((charts) => this.setState({ charts })).catch((error) => {
			throw error;
		});
	};

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
		const { charts, recentSize } = this.state;
		const listViewcharts = charts.slice(5, charts.length);
		return (
			<div id="home">
				<section id="recent-charts">
					<div className="container">
						<p id="rc-text">Recent Charts</p>
						<div className="row">
							<AddChart func={this.updateCharts} />
							{charts.slice(0, recentSize).map((chart) => (
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
					<CardList charts={listViewcharts} listView={this.state.listView} />
				</section>
			</div>
		);
	}
}
