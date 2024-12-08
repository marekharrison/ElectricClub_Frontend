import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/welcome.css'

function Register() {

    return (
        <div className="container">
            <div className="header">
                <h1>Solar Electric Club</h1>
            </div>

            <div className="body">
                <Link to='/customer'>
                    <button>Customer Account</button> <br /> <br />
                </Link>
                <Link to='/vendor'>
                    <button>Vendor Account</button>
                </Link>
            </div>
        </div>
    )

};

export default Register;