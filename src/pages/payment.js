import '../styles/payment.css'
import { Button } from '@mui/material';
import logo from '../images/sun1.png';
function Payment() {

    return (
        <div className="container">
            <header className="header-top">
                <h1>Solar Electric Club</h1>
                <div className="logo">
                    <img src={logo} alt="image of sun" />
                </div>
            </header>

            <div className="body">
                <h2>Choose your payment method below</h2> <br /> <br />
                <Button color="primary"
                    variant="contained"
                    style={{ maxWidth: '700px', maxHeight: '50px', minWidth: '700px', minHeight: '50px' }}>
                    Credit Card</Button> <br /> <br /> <br /> <br />
                <Button color="primary"
                    variant="contained"
                    style={{ maxWidth: '700px', maxHeight: '50px', minWidth: '700px', minHeight: '50px' }}>
                    Club Exchange</Button>
            </div>

            <footer className="footer">
                <h3 className="footer-text">&#169; 2024 The Solar Electric Club</h3>
            </footer>
        </div>
    )

};

export default Payment;