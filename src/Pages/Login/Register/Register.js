import React, { useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { NavLink, useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    //email pass handeler
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    //regiter submit
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <div className='bg-warning p-5'>
            <h2>Please Register</h2>
            {!isLoading && <form onSubmit={handleLoginSubmit}>
                <input onChange={handleOnBlur} className="input-field" type="Email"placeholder="Enter Your Email" name='email' />
                <br />
                <input onChange={handleOnBlur} className="input-field" type="password"placeholder="Enter New Passwoard" name='password'/>
                <br />
                <input onChange={handleOnBlur} className="input-field" type="password"placeholder="Retype Your Passwoard" name='password2'/>
                <br />
                <Button type="submit" className="pt-2 m-2">Register Now</Button>
                <br/>
                <NavLink
                    style={{ textDecoration: 'none' }}
                    to="/login">
                    <Button variant="text">Already Register? Please Login</Button>
                </NavLink>
            </form>}
            {isLoading && <Spinner />}
            {user?.email && <Alert severity="success">User Created successfully!</Alert>}
            {authError && <Alert severity="error">{authError}</Alert>}
        </div>
    );
};

export default Register;