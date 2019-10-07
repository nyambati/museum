import React, { useState } from 'react';
import Pagination from 'react-js-pagination';
import moment from 'moment';
import { connect } from 'react-redux';
import Card from './Card';

const ChartList = (props) => {
	const [ activePage, setActivePage ] = useState(1);
	const [ itemsCountPerPage ] = useState(8);
	const start = (activePage - 1) * itemsCountPerPage;
	const end = start + itemsCountPerPage;
	const _charts = props.charts.slice(5, props.charts.length);
	return (
		<div>
			<div className="mb-3">
				<table className="table table-hover">
					<tbody>
						{_charts.slice(start, end).map((chart) => {
							if (props.listView) {
								return (
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
								);
							}
							return (
								<div className="col-sm-3" key={chart.name}>
									<Card footer={true} chart={chart} />
								</div>
							);
						})}
					</tbody>
				</table>
			</div>
			{props.charts.length > 13 && (
				<Pagination
					activePage={activePage}
					itemsCountPerPage={itemsCountPerPage}
					totalItemsCount={props.charts.length}
					pageRangeDisplayed={5}
					onChange={(page) => setActivePage(page)}
					itemClass={'page-item bg-light'}
					linkClass={'page-link'}
				/>
			)}
		</div>
	);
};

ChartList.defaultProps = {
	charts: [],
	listView: false
};

const mapStateToProps = (state) => ({ charts: state.charts });

export default connect(mapStateToProps, {})(ChartList);
