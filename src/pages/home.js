import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css'

function Home() {

    return (
        <div className="container">
            <div className="header">
                <h1>The Electric Club</h1>
            </div>

            <div className= "body">
                <button>Map</button> <br/> <br/>
                <button>League Tables</button> <br/> <br/>
                <button>Chat</button> <br/> <br/>
                <button>Solar & About Us</button> <br /> <br />
                <Link to='/payment'>
                    <button>Charge Now</button>
                </Link>
            </div>
        </div>
    )

};

export default Home;