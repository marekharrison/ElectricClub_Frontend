import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css'
import { Button } from '@mui/material';
import logo from '../images/sun1.png';

function Home() {

    return (
        <div className="container">
            <header className="header-top">
                <h1>Solar Electric Club</h1>
                <div className="logo">
                    <img src={logo} alt="image of sun" />
                </div>
            </header>

            <div className= "body">
                <Button color="primary"
                    variant="contained"
                    style={{ maxWidth: '700px', maxHeight: '50px', minWidth: '700px', minHeight: '50px' }}>
                    Map</Button> <br /> <br />
                <Button color="primary"
                    variant="contained"
                    style={{ maxWidth: '700px', maxHeight: '50px', minWidth: '700px', minHeight: '50px' }}>
                    League Tables</Button> <br /> <br />
                <Button color="primary"
                    variant="contained"
                    style={{ maxWidth: '700px', maxHeight: '50px', minWidth: '700px', minHeight: '50px' }}>
                    Chat</Button> <br /> <br />
                <Button color="primary"
                    variant="contained"
                    style={{ maxWidth: '700px', maxHeight: '50px', minWidth: '700px', minHeight: '50px' }}>
                    Solar & About Us</Button> <br /> <br />
                <Link to='/payment'>
                    <Button color="primary"
                        variant="contained"
                        style={{ maxWidth: '700px', maxHeight: '50px', minWidth: '700px', minHeight: '50px' }}>
                        Charge Now</Button>
                </Link>
            </div>

            <footer className="footer">
                <h3 className="footer-text">&#169; 2024 The Solar Electric Club</h3>
            </footer>
        </div>
    )

};

export default Home;