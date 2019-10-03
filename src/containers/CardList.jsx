import React from 'react';
import Pagination from 'react-js-pagination';
import Card from '../components/Card';

class CardList extends React.Component {
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
		const { charts } = this.props;
		const start = (this.state.activePage - 1) * this.state.itemsCountPerPage;
		const end = start + this.state.itemsCountPerPage;
		return (
			<div>
				<div className="row">
					{charts.slice(start, end).map((chart) => (
						<div className="col-sm-3" key={chart.name}>
							<Card footer={true} chart={chart} />
						</div>
					))}
				</div>
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

export default CardList;
