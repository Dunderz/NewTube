import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

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

    render() {
        return (
            <div>
                <h2>Log In!</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Username:
                        <input type="text"
                               value={this.state.username}
                               onChange={this.handleInput('username')}/>
                    </label>
                    <label>Password:
                        <input type="password"
                               value={this.state.password}
                               onChange={this.handleInput('password')}/>
                    </label>
                    <button type="submit">Log In!</button>
                    <Link className="btn" to="/signup">Sign Up</Link>
                </form>
            </div>
        );
    }
}

export default Login;