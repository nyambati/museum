import React from 'react';
import Card from '../components/Card';
import CardList from '../containers/CardList';

import { list } from '../api/charts';

export default class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			charts: [],
			settings: {
				organisation: '',
				recentSize: 5
			}
		};
	}
	componentDidMount() {
		list().then((charts) => this.setState({ charts })).catch((error) => {
			throw error;
		});
	}
	render() {
		const { charts, settings } = this.state;
		return (
			<div id="home">
				<section id="recent-charts">
					<div className="container">
						<p id="rc-text">Recent Charts</p>
						<div className="row">
							<div className="col-sm-2">
								<div className="card border-primary mb-3 border-light" id="new-chart">
									<div className="card-body">
										<i className="material-icons">add</i>
									</div>
								</div>
								<div className="chart-footer mb-4">
									<p>New Chart </p>
								</div>
							</div>
							{charts.slice(0, settings.recentSize).map((chart, index) => (
								<div className="col-sm-2" key={chart.id}>
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
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								data-toggle="dropdown"
								href="#"
								role="button"
								aria-haspopup="true"
								aria-expanded="false"
							>
								{settings.organisation}
							</a>
							<div className="dropdown-menu">
								<a className="dropdown-item" href="#">
									Action
								</a>
								<a className="dropdown-item" href="#">
									Another action
								</a>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
								<div className="dropdown-divider" />
								<a className="dropdown-item" href="#">
									Separated link
								</a>
							</div>
						</li>
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
					<CardList charts={charts} />
				</section>
			</div>
		);
	}
}
