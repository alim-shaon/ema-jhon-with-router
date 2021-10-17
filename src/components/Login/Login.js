import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUri = location.state?.from || '/shop';

    const handelGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirectUri);
            })
    }

    return (
        <div className="login-form">
            <div>
                <h2>Log-In From Here</h2>
                <form>
                    <input type="email" name="" id="email" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to Ema-Jhon?<Link to="/register">Create Account</Link></p>
                <div>-------------or------------</div>
                <button
                    className="btn-regular"
                    onClick={handelGoogleLogin}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;
