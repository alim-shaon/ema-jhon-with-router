import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="your password" />
                    <br />
                    <input type="password" name="" id="" placeholder="re-enter your password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Alreay have an account<Link to="/login">Sign In</Link> </p>
                <div>-------------or------------</div>
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;