import React from 'react';
import axios from 'axios';

class AddChart extends React.Component {
	constructor(props) {
		super(props);
		this.input = React.createRef();
		this.trigger = this.trigger.bind(this);
		this.handleUploadFile = this.handleUploadFile.bind(this);
	}

	trigger(event) {
		this.input.current.click();
	}

	handleUploadFile(event) {
		const data = new FormData();
		data.append('file', event.target.files[0]);
		const uploadUrl = process.env.API_BASE_URL + '/upload';
		axios
			.post(uploadUrl, data)
			.then((response) => {
				this.props.func();
			})
			.catch((error) => {
				throw error;
			});
	}

	render() {
		return (
			<div className="col-sm-2" onClick={this.trigger}>
				<div className="card border-primary mb-3 border-light" id="new-chart">
					<div className="card-body">
						<input
							hidden
							type="file"
							name="chart"
							id="chart"
							ref={this.input}
							onChange={this.handleUploadFile}
						/>
						<i className="material-icons">add</i>
					</div>
				</div>
				<div className="chart-footer mb-4">
					<p>New Chart </p>
				</div>
			</div>
		);
	}
}

export default AddChart;
