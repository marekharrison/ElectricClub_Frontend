function Register() {

    return (

        <div className="container">
            <div className="header">
                <h1>Create Account</h1>
            </div>
            <div className="body">
                <form>
                    <label>Name: <br />
                        <input type="text" /> <br /> <br />
                    </label>
                    <label>E-Mail Address: <br />
                        <input type="email" /> <br /> <br />
                    </label>
                    <label>Phone Number: <br />
                        <input type="tel" /> <br /> <br />
                    </label>
                    <label>Password: <br />
                        <input type="password" /> <br /> <br />
                    </label>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    )

};

export default Register;