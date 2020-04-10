import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
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
            .then(() => this.props.history.push('/'))
    }

    render () {
        const errors = this.props.errors[0].map((error, i) => <li key={i}>{error}</li>)
        return (
            <div className="session-form">
                <div className="form-container">
                    <form className="form-sign-up">
                        <Link to="/"><img src={ window.newtube } id='signin-logo'/></Link>
                        <h2 className="sign-in-title">Create your NewTube account</h2>
                        <p className="sign-in-subtitle">to continue to NewTube</p>
                        <label className="input-username">
                            <input 
                                type="text" 
                                value={this.state.username}
                                onChange={this.handleInput('username')}
                                placeholder="Username"
                                />
                        </label>
                        <label className="input-email">
                            <input 
                                type="text" 
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                                placeholder="Email"
                                />
                        </label>
                        <label className="input-password">
                            <input 
                                type="password" 
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                                placeholder="Password"
                                />
                        </label>
                        <div className="errors-container">
                            <ul className="signup-errors">
                                {errors}
                            </ul>
                        </div>
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