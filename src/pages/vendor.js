import React from 'react';
import { useState } from 'react';
import '../styles/registration.css';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import logo from '../images/sun1.png';

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
            <header className="header-top">
                <h1>Solar Electric Club</h1>
                <div className="logo">
                    <img src={logo} alt="image of sun" />
                </div>
            </header>
            <div className="body">
                <h2>Please complete the following vendor registration form</h2> <br /> <br />
                <form onSubmit={handleSubmit}>
                    <label>Company Name: <br />
                        <TextField type="text"
                            value={name}
                            required
                            label="Required"
                            variant="filled"
                            style={{ maxWidth: '500px', maxHeight: '50px', minWidth: '500px', minHeight: '50px' }}
                            onChange={(e) => setName(e.target.value)} /> <br /> <br />
                    </label>
                    <label>Address Line 1: <br />
                        <TextField type="text"
                            value={line1}
                            required
                            label="Required"
                            variant="filled"
                            style={{ maxWidth: '500px', maxHeight: '50px', minWidth: '500px', minHeight: '50px' }}
                            onChange={(e) => setLine1(e.target.value)} /> <br /> <br />
                    </label>
                    <label>Address Line 2: <br />
                        <TextField type="text"
                            value={line2}
                            label="Optional"
                            variant="filled"
                            style={{ maxWidth: '500px', maxHeight: '50px', minWidth: '500px', minHeight: '50px' }}
                            onChange={(e) => setLine2(e.target.value)} /> <br /> <br />
                    </label>
                    <label>City: <br />
                        <TextField type="text"
                            value={city}
                            required
                            label="Required"
                            variant="filled"
                            style={{ maxWidth: '500px', maxHeight: '50px', minWidth: '500px', minHeight: '50px' }}
                            onChange={(e) => setCity(e.target.value)} /> <br /> <br />
                    </label>Postal Code: <br />
                    <TextField type="text"
                        value={postal}
                        required
                        label="Required"
                        variant="filled"
                        style={{ maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px' }}
                        onChange={(e) => setPostal(e.target.value)} /> <br /> <br />
                    <label>Country: <br />
                        <select value={country} onChange={(e) => setCountry(e.target.value)}>
                            <option value="United Kingdom">United Kingdom</option>
                        </select> <br /> <br />
                    </label>
                    <label>Phone Number: <br />
                        <TextField type="tel"
                            value={phone}
                            required
                            label="Required"
                            variant="filled"
                            style={{ maxWidth: '300px', maxHeight: '50px', minWidth: '300px', minHeight: '50px' }}
                            onChange={(e) => setPhone(e.target.value)} /> <br /> <br />
                    </label>
                    <label>E-Mail Address: <br />
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
                            onChange={(e) => setPassword(e.target.value)} /> <br /> <br />
                    </label>
                    <label>Number of Charging Stations: <br />
                        <input type="range" min="1" max="20" value={stations} onChange={(e) => setStations(e.target.value)} /> 
                    </label>
                    <label>{stations}</label> <br /> <br />
                    <Button type="submit" color="primary" variant="contained">Register</Button>
                </form>
            </div>

            <footer className="footer-registration">
                <h3 className="footer-text">&#169; 2024 The Solar Electric Club</h3>
            </footer>
        </div>
    )

};

export default Vendor;