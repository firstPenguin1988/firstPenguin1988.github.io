import React, {Component} from 'react';
import './login.css';

class Login extends Component {
    render() {
        return (
            <div className="login">
                <form className="login-form" action="">
                    
                    <div className="form-header">
                        <h3>Login</h3>
                        <p>Login to Dashboard</p>
                    </div>
                    
                    <div className="login-input">
                        <input type="text" className="form-input" placeholder="email" />
                    </div>
                    
                    <div className="login-input">
                        <input type="password" className="form-input" placeholder="password" />
                    </div>

                    <div className="check-box">
                        <input type="checkbox" className="form-input" id="check" />
                        <label className="remember-me" for="check">Remember me</label>
                    </div>
                    
                    <div className="login-input">
                        <button className="form-button" type="submit">Login</button>
                    </div>
                    
                    <div className="form-footer">
                        Don't have an account? <a href="#">Sign Up</a>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;