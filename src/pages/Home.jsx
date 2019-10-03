import React from 'react';
import Card from '../components/Card';
import CardList from '../containers/CardList';

import { list } from '../api/charts';
import AddChart from '../components/AddChart';

export default class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			charts: [],
			settings: {
				organisation: 'ChartMuseum',
				recentSize: 5
			}
		};

		this.updateCharts = this.updateCharts.bind(this);
	}

	updateCharts() {
		return list().then((charts) => this.setState({ charts })).catch((error) => {
			throw error;
		});
	}

	componentDidMount() {
		return this.updateCharts();
	}

	render() {
		const { charts, settings } = this.state;
		return (
			<div id="home">
				<section id="recent-charts">
					<div className="container">
						<p id="rc-text">Recent Charts</p>
						<div className="row">
							<AddChart func={this.updateCharts} />
							{charts.slice(0, settings.recentSize).map((chart) => (
								<div className="col-sm-2" key={chart.name}>
									<Card chart={chart} />
									<div className="chart-footer mb-4">
										<p>{chart.name}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
				<section className="mb-3 mt-3 container">
					<ul className="nav nav-pills justify-content-end">
						<li className="nav-item nav-item-50">
							<a className="nav-link">
								<i className="material-icons">list_view</i>
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
					<CardList charts={charts.splice(5)} />
				</section>
			</div>
		);
	}
}
