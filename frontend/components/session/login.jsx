import React from 'react';
import { Link } from 'react-router-dom';
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const demo_user = {username: 'demo', password: 'password'};

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: []
        };

        this.demoLogin = this.demoLogin.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        this.props.eraseErrors();
    }

    handleInput(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user)
            .then(null, (err) => {
                
                this.setState({ errors: this.renderErrors() })
            })
            .then(() => this.props.history.push('/'));
    }
    
    demoLogin(e) {
        e.preventDefault();
        this.props.login(demo_user)
            .then(() => {
                this.props.history.push('/')
            });
            
    }

    renderErrors() {
        
        let errors = [];
        if (this.props.errors.includes("Invalid username or password.")) {
            if (this.state.username.length === 0) {
                errors.push('Enter an email or username');
            } 
            if (this.state.username.length > 0) {
                errors.push("Couldn't find your email or username");
            }
            if (this.state.password.length === 0) {
                errors.push('Enter a password');
            }
            if (this.state.password.length > 0) {
                errors.push('Wrong password. Try again');
            }
        }
        return errors;
    }

    emailError() {
        if (this.state.errors.includes('Enter an email or username')) {
            return 'Enter an email or username';
        } else if (this.state.errors.includes("Couldn't find your email or username")) {
            return "Couldn't find your email or username";
        }
    }

    passwordError() {
        if (this.state.errors.includes('Enter a password')) {
            return 'Enter a password';
        } else if (this.state.errors.includes('Wrong password. Try again')) {
            return 'Wrong password. Try again';
        }
    }

    render() {
        let emailError = this.emailError() ? 'border-error' : '';
        let emailShow;
        if (emailError.length > 0) {
            emailShow = (
                <div className={`error-container`}>
                    <div className="error-icon">
                        <FontAwesomeIcon icon={faExclamationCircle} />
                    </div>
                    <p className="error">{this.emailError()}</p>
                </div>
            );
        }

        let passwordError = this.passwordError() ? 'border-error' : '';
        let passwordShow;
        if (passwordError.length > 0) {
            passwordShow = (
                <div className={`error-container`}>
                    <div className="error-icon">
                        <FontAwesomeIcon icon={faExclamationCircle} />
                    </div>
                    <p className="error">{this.passwordError()}</p>
                </div>
            );
        }

        return (
            <div className="sign-in-container">
                <div className="session-form">
                    <div>
                        <form className="form-sign-in" onSubmit={this.handleSubmit}>
                            <Link className="session-newtube-logo" to="/"><img src={ window.newtube } id='signin-logo'/></Link>
                            <h2 className="sign-in-title">Sign In</h2>
                            <p className="sign-in-subtitle">to continue to NewTube</p>
                            <label className={`input-username`}>
                                <input type="text"
                                    className={`${emailError}`}
                                    value={this.state.username}
                                    onChange={this.handleInput('username')}
                                    placeholder="Username or Email"/>
                                {emailShow}
                                
                            </label>
                            <label className={`input-password`}>
                                <input type="password"
                                    className={`${passwordError}`}
                                    value={this.state.password}
                                    onChange={this.handleInput('password')}
                                    placeholder="Password"/>
                                {passwordShow}
                            </label>
                            <div className="demo-login-form">
                                <p>Don't want to sign up? Use demo mode instead!</p>
                                <div className="demo-login-button" onClick={this.demoLogin}>
                                    Demo Login
                                </div>
                            </div>
                            <div className="form-buttons">
                                <Link className="sign-up-link" to="/signup">Create account</Link>
                                <button className="log-in-btn" type="submit">Next</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;