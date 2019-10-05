import React from 'react';

export default class VewChart extends React.Component {
	render() {
		return (
			<div id="chart_view">
				<div className="container">
					<div className="card  mb-3">
						<div className="card-body">
							<h4 className="card-title">Secondary card title</h4>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the card's
								content.
							</p>
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
								<a href="#" className="list-group-item list-group-item-action">
									Dapibus ac facilisis in
								</a>
								<a href="#" className="list-group-item list-group-item-action">
									Morbi leo risus
								</a>
								<a href="#" className="list-group-item list-group-item-action">
									Porta ac consectetur ac
								</a>
								<a
									href="#"
									className="list-group-item list-group-item-action"
									tabIndex="-1"
									aria-disabled="true"
								>
									Vestibulum at eros
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
