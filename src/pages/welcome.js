import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/welcome.css';
import { Button } from '@mui/material';
import logo from '../images/sun1.png';

function Welcome() {

    return (
        <div className="container">
            <header className="header-top">
                <h1>Solar Electric Club</h1>
                <div className="logo">
                    <img src={logo} alt="image of sun"/>
                </div>
            </header>

            <div className="body">
                <h2>Welcome to the Solar Electric Club. Powering your daily drive!</h2> <br/> <br/>
                <Link to='/login'>
                    <Button color="primary"
                        variant="contained"
                        style={{ maxWidth: '700px', maxHeight: '50px', minWidth: '700px', minHeight: '50px' }}
                        className="b1">
                        Sign In</Button> <br/> <br/> <br/> <br/>
                </Link>


                <Link to='/register'>
                    <Button color="primary"
                        variant="contained"
                        style={{ maxWidth: '700px', maxHeight: '50px', minWidth: '700px', minHeight: '50px' }}
                        className="b2">
                        Create Account</Button>
                </Link>
                <label>Not a member yet? Sign up for a free account.</label>

            </div>

            <footer className="footer">
                <h3 className="footer-text">&#169; 2024 The Solar Electric Club</h3>
            </footer>
        </div>
    )

};

export default Welcome;