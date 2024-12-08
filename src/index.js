import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
/*import './index.css';*/
import Login from './pages/login.js';
import Register from './pages/register.js';
import Home from './pages/home.js';
import Payment from './pages/payment.js';
import Welcome from './pages/welcome.js';
import Customer from './pages/customer.js';
import Vendor from './pages/vendor.js';


function App(){
    return(
        <>


            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Welcome />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/customer' element={<Customer />} />
                    <Route path='/vendor' element={<Vendor />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/payment' element={<Payment />} />
                </Routes>
            </BrowserRouter>
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


