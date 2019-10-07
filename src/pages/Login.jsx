import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../store/charts';

const Login = (props) => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	return (
		<div id="home">
			<form
				className="form-signin"
				onSubmit={(e) => {
					e.preventDefault();
					props.login(email, password);
				}}
			>
				<div className="text-center mb-4">
					<img
						className="mb-4"
						src="https://avatars1.githubusercontent.com/u/30879152?s=400&v=4"
						alt=""
						width="100"
						height="100"
					/>
				</div>

				<div className="form-label-group">
					<input
						type="email"
						name="email"
						id="inputEmail"
						className="form-control"
						placeholder="Email address"
						required
						autoFocus
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<label htmlFor="inputEmail">Email address</label>
				</div>

				<div className="form-label-group">
					<input
						type="password"
						name="password"
						id="inputPassword"
						className="form-control"
						placeholder="Password"
						required
						value={password}
						onChange={(e) => setPassword(e.target.value)}
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
};

export default connect((state) => ({ errors: state.errors }), { login })(Login);
