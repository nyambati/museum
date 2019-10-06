import React from 'react';
import Pagination from 'react-js-pagination';
import moment from 'moment';
import Card from './Card';

class ChartsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activePage: 1,
			itemsCountPerPage: 8
		};

		this.handlePageChange = this.handlePageChange.bind(this);
	}

	handlePageChange(activePage) {
		this.setState({ activePage });
	}

	render() {
		const { charts, listView } = this.props;
		const start = (this.state.activePage - 1) * this.state.itemsCountPerPage;
		const end = start + this.state.itemsCountPerPage;
		const cardsView = (
			<div className="row">
				{charts.slice(start, end).map((chart) => (
					<div className="col-sm-3" key={chart.name}>
						<Card footer={true} chart={chart} />
					</div>
				))}
			</div>
		);

		const listsView = (
			<div className="mb-3">
				<table className="table table-hover">
					{/* <thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">First</th>
							<th scope="col">Last</th>
							<th scope="col">Handle</th>
						</tr>
					</thead> */}
					<tbody>
						{charts.slice(start, end).map((chart) => (
							<tr key={chart.version} className="list_view_item">
								<th scope="row">
									<i className="material-icons">insert_drive_file</i>
								</th>
								<td>{chart.name}</td>
								<td>version {chart.version}</td>
								<td>{moment(chart.created).fromNow()}</td>
								<td className="list_view_action">
									<i className="material-icons">more_vert</i>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);

		return (
			<div>
				{listView ? listsView : cardsView}
				{charts.length > 0 && (
					<Pagination
						activePage={this.state.activePage}
						itemsCountPerPage={this.state.itemsCountPerPage}
						totalItemsCount={charts.length}
						pageRangeDisplayed={5}
						onChange={this.handlePageChange}
						itemClass={'page-item bg-light'}
						linkClass={'page-link'}
					/>
				)}
			</div>
		);
	}
}

export default ChartsList;
