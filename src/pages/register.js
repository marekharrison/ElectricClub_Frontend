import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/register.css';
import { Button } from '@mui/material';
import logo from '../images/sun1.png';

function Register() {

    return (
        <div className="container">
            <header className="header-top">
                <h1>Solar Electric Club</h1>
                <div className="logo">
                    <img src={logo} alt="image of sun" />
                </div>
            </header>

            <div className="body">
                <h2>Choose the type of account to create below</h2> <br /> <br />
                <Link to='/customer'>
                    <Button color="primary"
                        variant="contained"
                        style={{ maxWidth: '700px', maxHeight: '50px', minWidth: '700px', minHeight: '50px' }}>
                        Customer Account</Button> <br /> <br /> <br /> <br />
                </Link>
                <Link to='/vendor'>
                    <Button color="primary"
                        variant="contained"
                        style={{ maxWidth: '700px', maxHeight: '50px', minWidth: '700px', minHeight: '50px' }}>
                        Vendor Account</Button>
                </Link>
            </div>

            <footer className="footer">
                <h3 className="footer-text">&#169; 2024 The Solar Electric Club</h3>
            </footer>
        </div>
    )

};

export default Register;