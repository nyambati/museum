import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { upload } from '../store/charts';

const UploadCharts = (props) => {
	const fileInput = useRef(null);
	const data = new FormData();
	return (
		<div className="col-sm-2" onClick={() => fileInput.current.click()}>
			<div className="card border-primary mb-3 border-light" id="new-chart">
				<div className="card-body">
					<input
						hidden
						type="file"
						name="chart"
						id="chart"
						ref={fileInput}
						onChange={(e) => {
							for (let i = 0; i < e.target.files.length; i++) {
								data.append('charts', e.target.files[i]);
							}
							props.upload(data);
						}}
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
};

export default connect(null, { upload })(UploadCharts);
