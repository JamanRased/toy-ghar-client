import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { NavLink, useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError,signInWithGoogle } = useAuth();

    //Current Sate 
    const location = useLocation();
    const history = useHistory();

    //Handle Email Passwaord Change 
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    //Submit Login Button
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    //GoogleSign
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <div className='bg-warning p-5'>
            <h2>Please Login</h2>
            <div>
                <form onSubmit= {handleLoginSubmit}>
                    <input type="text" className="p-2 m-2 w-25" onChange={handleOnChange} required='*' placeholder='Enter Your Email' name='email' /><br/>
                    <input type="password" className="p-2 m-2 w-25" onChange={handleOnChange} required='*' placeholder='Enter Your Password' name='password'/><br/>
                    <input type="submit" className="p-2 m-2 w-25" value="Login" />
                    <br/>
                    <NavLink
                        style={{ textDecoration: 'none'}}
                        to="/register">
                        <p className='mb-4 ps-2 text-bla' variant="text">New User? Please Register</p>
                    </NavLink>
                    {isLoading && <Spinner />}
                    {user?.email && <Alert severity="success">Login successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </form>

                <button onClick={handleGoogleSignIn} className="btn btn-success px-3 m-2 w-25">Google Sign In</button>
               
            </div>
            <br />
            
        </div>
    );
};

export default Login;