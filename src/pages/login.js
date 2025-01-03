import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css'
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import logo from '../images/sun1.png';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

function Login() {

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = async(e) => {
		e.preventDeafault();
		try {
			await signInWithEmailAndPassword(auth,email,password);
			console.log("User logged in successfully");
		} catch (error) {
			
		}

	}


	//const handleSubmit = (event) => {
	//	event.preventDefault();
	//	alert(`The password you entered was: ${password}`)
	//}

	return (
		<div className="container">
			<header className="header-top">
				<h1>Solar Electric Club</h1>
				<div className="logo">
					<img src={logo} alt="image of sun" />
				</div>
			</header>

			<div className="body">
				<h2>Please sign in to your account below</h2> <br /> <br />
				<form onSubmit={handleSubmit}>
					<label>E-Mail: <br />
						<TextField type="email"
							value={email}
							required
							label="Required"
							variant="filled"
							style={{ maxWidth: '500px', maxHeight: '50px', minWidth: '500px', minHeight: '50px' }}
							onChange={(e) => setEmail(e.target.value)} /> <br /> <br />
					</label>
					<label>Password: <br />
						<TextField type="password"
							value={password}
							required
							label="Required"
							variant="filled"
							style={{ maxWidth: '500px', maxHeight: '50px', minWidth: '500px', minHeight: '50px' }}
							onChange={(e) => setPassword(e.target.value)}/> <br /> <br />
					</label>
					<Link to='/home'>
						<Button type="submit" color="primary" variant="contained">Log In</Button>
					</Link>
				</form>
			</div>

			<footer className="footer">
				<h3 className="footer-text">&#169; 2024 The Solar Electric Club</h3>
			</footer>
		</div>
		
	)

};

export default Login;