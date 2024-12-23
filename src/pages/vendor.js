import React from 'react';
import { useState } from 'react';
import '../styles/register.css';

function Vendor() {

    const [name, setName] = useState("")
    const [line1, setLine1] = useState("")
    const [line2, setLine2] = useState("")
    const [city, setCity] = useState("")
    const [postal, setPostal] = useState("")
    const [country, setCountry] = useState("")
    const [stations, setStations] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The password you entered was: ${password}`)
    }

    async function submitForm() {

        let url = ''
        const form = new FormData()

        const response = await fetch(url, { method: 'POST', body: form })
    } 

    return (
        <div className="container">
            <div className="header">
                <h1>Create Account</h1>
            </div>
            <div className="body">
                <form onSubmit={handleSubmit}>
                    <label>Company Name: <br />
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br /> <br />
                    </label>
                    <label>Address Line 1: <br />
                        <input type="text" value={line1} onChange={(e) => setLine1(e.target.value)} /> <br /> <br />
                    </label>
                    <label>Address Line 2: <br />
                        <input type="text" value={line2} onChange={(e) => setLine2(e.target.value)} /> <br /> <br />
                    </label>
                    <label>City: <br />
                        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} /> <br /> <br />
                    </label>Postal Code: <br />
                    <input type="text" value={postal} onChange={(e) => setPostal(e.target.value)} /> <br /> <br />
                    <label>Country: <br />
                        <select value={country} onChange={(e) => setCountry(e.target.value)}>
                            <option value="United Kingdom">United Kingdom</option>
                        </select> <br /> <br />
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
                    <label>Number of Charging Stations: <br />
                        <input type="range" min="1" max="20" value={stations} onChange={(e) => setStations(e.target.value)} /> 
                    </label>
                    <label>{stations}</label> <br /> <br />
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    )

};

export default Vendor;