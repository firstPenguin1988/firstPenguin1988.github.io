import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './login.css';

class Login extends Component {

    constructor(props) {
        super(props);

        //returning value of Storage Object Item and storing in token
        const token = localStorage.getItem("token");
        let loggedIn = true;

		if (token == null) {
			loggedIn = false
        }
        
        this.state = {
            username: '',
            password: '',
            checked: false,
            loggedIn
        };
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //cannot return false to prevent default befavior in React.
    // Must call preventDefault
    submitForm = (e) => {
        e.preventDefault();
        const {username, password} = this.state;
        //storing falg in localstorage
        if (username === "admin" && password === "admin123") {
            localStorage.setItem("token", "welcometomydashboard")
            this.setState({
                loggedIn: true
            })
        }
    }

    /*
    myCheckbox = (ev) => {
        let {checked} = this.state;
        
        this.setState ({
            checked: !checked
        })
        localStorage.setItem("token", "welcometomydashboard")
    } */


    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/dashboard"/>
        }

        return (
            <div className="login">
                <form className="login-form" onSubmit={this.submitForm}>
                    
                    <div className="form-header">
                        <h3>Login</h3>
                        <p>Login to your Dashboard</p>
                    </div>
                    
                    <div className="login-input">
                        <input type="text" className="form-input" placeholder="username" name="username" value={this.state.username} onChange={this.onChange} />
                    </div>
                    
                    <div className="login-input">
                        <input type="password" className="form-input" placeholder="password" name="password" value={this.state.password} onChange={this.onChange} />
                    </div>

                    <div className="check-box">
                        <input type="checkbox" className="check-box" id="myCheck" /*onClick={this.myCheckbox}*/ />
                        <label className="remember-me" for="check">Remember me</label>
                    </div>
                    
                    <div className="login-button">
                        <input className="form-button" type="submit" />
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default Login;