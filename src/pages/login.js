import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css'
function Login() {

	return (
		<div className="container">
			<div className="header">
				<h1>Welcome Back</h1>
			</div>
			<div className="body">
				<form>
					<label>E-Mail: <br />
						<input type="email" /> <br /> <br />
					</label>
					<label>Password: <br />
						<input type="text" /> <br /> <br />
					</label>
					<Link to='/home'>
						<button type="submit">Log In</button>
					</Link>
				</form>
			</div>
		</div>
		
	)

};

export default Login;