import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css'
function Login() {

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(`The password you entered was: ${password}`)
	}

	return (
		<div className="container">
			<div className="header">
				<h1>Welcome Back</h1>
			</div>
			<div className="body">
				<form onSubmit={handleSubmit}>
					<label>E-Mail: <br />
						<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br /> <br />
					</label>
					<label>Password: <br />
						<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br /> <br />
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