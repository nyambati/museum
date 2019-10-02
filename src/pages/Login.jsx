import React from 'react';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.onSubmitHandler = this.onSubmitHandler.bind(this);
	}

	onSubmitHandler(event) {
		event.preventDefault();
		location.replace('/home');
	}
	render() {
		console.log('Ima runnning');
		console.log(this.props.location);
		return (
			<div id="home">
				<form className="form-signin" onSubmit={this.onSubmitHandler}>
					<div className="text-center mb-4">
						<img
							className="mb-4"
							src="https://avatars1.githubusercontent.com/u/30879152?s=400&v=4"
							alt=""
							width="72"
							height="72"
						/>
					</div>

					<div className="form-label-group">
						<input
							type="email"
							id="inputEmail"
							className="form-control"
							placeholder="Email address"
							required
							autoFocus
						/>
						<label htmlFor="inputEmail">Email address</label>
					</div>

					<div className="form-label-group">
						<input
							type="password"
							id="inputPassword"
							className="form-control"
							placeholder="Password"
							required
						/>
						<label htmlFor="inputPassword">Password</label>
					</div>

					<div className="checkbox mb-3">
						<label>
							<input type="checkbox" value="remember-me" /> Remember me
						</label>
					</div>
					<button className="btn btn-lg btn-primary btn-block" type="submit">
						Sign in
					</button>
				</form>
			</div>
		);
	}
}
