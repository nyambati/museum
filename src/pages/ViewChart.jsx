import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchChartByVersion, list } from '../store/charts';

class VewChart extends React.Component {
	state = {
		versions: []
	};
	componentDidMount() {
		const { location, match } = this.props;
		const search = new URLSearchParams(location.search);
		this.props.fetchChartByVersion(match.params.name, search.get('version'));
	}

	con;
	render() {
		const { chart } = this.props;
		return (
			<div id="chart_view">
				<div className="container">
					<div className="card  mb-3">
						<div className="card-body">
							<h4 className="card-title">{chart.name}</h4>
							<p className="card-text">{chart.description}</p>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-8">
							<div className="card  mb-3">
								<div className="card-header">Header</div>
								<div className="card-body">
									<h4 className="card-title">Secondary card title</h4>
									<p className="card-text">
										Some quick example text to build on the card title and make up the bulk of the
										card's content.
									</p>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="list-group">
								<a href="#" className="list-group-item list-group-item-action">
									Versions
								</a>
								{chart.versions.map((version) => (
									<Link
										to={{
											pathname: `/view/${chart.name}`,
											search: `?version=${version}`
										}}
										className="list-group-item list-group-item-action"
										key={version}
									>
										Version {version}
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	chart: state.chart
});

export default connect(mapStateToProps, { fetchChartByVersion })(VewChart);
