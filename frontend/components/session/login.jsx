import React from 'react';
import { Link } from 'react-router-dom';

const demo_user = {username: 'demo', password: 'password'};

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.demoLogin = this.demoLogin.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push('/'));
    }
    
    demoLogin(e) {
        e.preventDefault();
        this.props.login(demo_user)
            .then(() => this.props.history.push('/'));
    }

    render() {
        return (
            <div className="session-form">
                <div>
                    <form className="form-sign-up" onSubmit={this.handleSubmit}>
                        <Link to="/"><img src={ window.newtube } id='signin-logo'/></Link>
                        <h2 className="sign-in-title">Sign In</h2>
                        <p className="sign-in-subtitle">to continue to NewTube</p>
                        <label className="input-username">
                            <input type="text"
                                value={this.state.username}
                                onChange={this.handleInput('username')}
                                placeholder="Username or Email"/>
                        </label>
                        <label className="input-password">
                            <input type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                                placeholder="Password"/>
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
        );
    }
}

export default Login;