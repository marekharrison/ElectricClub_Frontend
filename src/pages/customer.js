import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/register.css'
function Customer() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The password you entered was: ${password}`)
    }

    return (

        <div className="container">
            <div className="header">
                <h1>Create Account</h1>
            </div>
            <div className="body">
                <form onSubmit={handleSubmit}>
                    <label>Name: <br />
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br /> <br />
                    </label>
                    <label>E-Mail Address: <br />
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br /> <br />
                    </label>
                    <label>Phone Number: <br />
                        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} /> <br /> <br />
                    </label>
                    <label>Password: <br />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br /> <br />
                    </label>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    )

};

export default Customer;