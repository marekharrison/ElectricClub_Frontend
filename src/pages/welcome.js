import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/welcome.css'

function Welcome() {

    return (
        <div className="container">
            <div className="header">
                <h1>Solar Electric Club</h1>
            </div>

            <div className="body">
                <Link to='/register'>
                    <button>Create Account</button> <br /> <br />
                </Link>
                <Link to='/login'>
                    <button>Sign In</button>
                </Link>   
            </div>
        </div>
    )

};

export default Welcome;