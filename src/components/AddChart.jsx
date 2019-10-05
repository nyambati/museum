import React from 'react';
import axios from 'axios';

class AddChart extends React.Component {
	state = {
		charts: []
	};
	constructor(props) {
		super(props);
		this.input = React.createRef();
	}

	trigger = (event) => {
		this.input.current.click();
	};

	onChangeHandler = (e) => {
		const data = new FormData();
		const files = e.target.files;
		for (let i = 0; i < files.length; i++) {
			data.append('charts', files[i]);
		}
		const uploadUrl = process.env.API_BASE_URL + '/api/charts';
		axios.post(uploadUrl, data).then((res) => this.props.func(res)).catch((error) => console.log);
	};
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
							onChange={this.onChangeHandler}
							multiple
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
