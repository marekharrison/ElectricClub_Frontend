import {createUserWithEmailAndPassword} from "firebase/auth";
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/registration.css'
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import logo from '../images/sun1.png';
import {auth,db} from "./firebase";
import {setDoc ,doc} from "firebase/firestore";

function Customer() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
           await createUserWithEmailAndPassword(auth, email, password);
           const user = auth.currentUser;
           console.log(user);
           if (user){
            await setDoc(doc(db,"Users", user.uid), {
                email:user.email,
                firstName: name,
                phoneNumber: phone,
            });
        }
           console.log("User registered successfully")
        } catch (error) {
            console.log(error.message)
        }

    }

    //const handleSubmit = (event) => {
      //  event.preventDefault();
        //alert(`The password you entered was: ${password}`)
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
                <h2>Please complete the following customer registration form</h2> <br /> <br />
                <form onSubmit={handleRegister}>
                    <label>Name: <br />
                        <TextField type="text"
                            value={name}
                            required
                            label="Required"
                            variant="filled"
                            style={{ maxWidth: '500px', maxHeight: '50px', minWidth: '500px', minHeight: '50px' }}
                            onChange={(e) => setName(e.target.value)} /> <br /> <br />
                    </label>
                    <label>Phone Number: <br />
                        <TextField type="tel"
                            value={phone}
                            required
                            label="Required"
                            variant="filled"
                            style={{ maxWidth: '500px', maxHeight: '50px', minWidth: '500px', minHeight: '50px' }}
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
                    <Button type="submit" color="primary" variant="contained">Register</Button>
                </form>
            </div>

            <footer className="footer-registration">
                <h3 className="footer-text">&#169; 2024 The Solar Electric Club</h3>
            </footer>
        </div>
    )

};

export default Customer;