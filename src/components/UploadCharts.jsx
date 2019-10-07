import React from 'react';
import { connect } from 'react-redux';
import { upload } from '../store/charts';

class UploadCharts extends React.Component {
	constructor(props) {
		super(props);
		this.input = React.createRef();
	}

	trigger = () => {
		this.input.current.click();
	};

	onChangeHandler = (e) => {
		const data = new FormData();
		const files = e.target.files;
		for (let i = 0; i < files.length; i++) {
			data.append('charts', files[i]);
		}
		this.props.upload(data);
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

export default connect(null, { upload })(UploadCharts);
