import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            errors: []
        };  

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        this.props.eraseErrors();
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state)
            .then(null, (err) => {
                this.setState({ errors: this.renderErrors() });
            })
            .then(() => this.props.history.push('/'))
    }

    renderErrors() {
        let errors = [];
        if (this.props.errors[0].includes("Username can't be blank")) {
            errors.push("Username can't be blank");
        } else if (this.props.errors[0].includes("Username has already been taken")) {
            errors.push("Username has already been taken");
        }

        if (this.props.errors[0].includes("Email can't be blank")) {
            errors.push("Email can't be blank");
        } else if (this.props.errors[0].includes("Email is invalid")) {
            errors.push("Email is invalid");
        }

        if (this.props.errors[0].includes("Password is too short (minimum is 6 characters)")) {
            errors.push("Password is too short (minimum is 6 characters)");
        }
        
        return errors;
    }

    usernameError() {
        if (this.state.errors.includes("Username can't be blank")) {
            return "Username can't be blank";
        } else if (this.state.errors.includes("Username has already been taken")) {
            return "Username has already been taken";
        }
    }

    emailError() {
        if (this.state.errors.includes("Email can't be blank")) {
            return "Email can't be blank";
        } else if (this.state.errors.includes("Email is invalid")) {
            return "Email is invalid";
        }
    }

    passwordError() {
        if (this.state.errors.includes('Password is too short (minimum is 6 characters)')) {
            return 'Password is too short (minimum is 6 characters)';
        }
    }

    render () {

        let usernameError = this.usernameError() ? 'border-error' : '';
        let usernameShow;
        if (usernameError.length > 0) {
            usernameShow = (
                <div className={`error-container`}>
                    <div className="error-icon">
                        <FontAwesomeIcon icon={faExclamationCircle} />
                    </div>
                    <p className="error">{this.usernameError()}</p>
                </div>
            );
        }
        
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
            <div className="session-form">
                <div className="form-container">
                    <form className="form-sign-up">
                        <Link to="/"><img src={ window.newtube } id='signin-logo'/></Link>
                        <h2 className="sign-in-title">Create your NewTube account</h2>
                        <p className="sign-in-subtitle">to continue to NewTube</p>
                        <label className="input-username">
                            <input 
                                className={`${usernameError}`}
                                type="text" 
                                value={this.state.username}
                                onChange={this.handleInput('username')}
                                placeholder="Username"
                                />
                            {usernameShow}
                        </label>
                        <label className="input-email">
                            <input 
                                className={`${emailError}`}
                                type="text" 
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                                placeholder="Email"
                                />
                            {emailShow}
                        </label>
                        <label className="input-password">
                            <input 
                                className={`${passwordError}`}
                                type="password" 
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                                placeholder="Password"
                                />
                            {passwordShow}
                        </label>
                        
                        <div className="form-buttons">
                            <Link className="sign-up-link" to="/login">Sign in instead</Link>
                            <button className="log-in-btn" onClick={this.handleSubmit}>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Signup;