import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
            <div>
                <p>Hello, { currentUser.username }</p>
                <button onClick={logout}>Log Out</button>
            </div>
        ) : ( 
        <div>
            <Link className="btn" to="/login">SIGN IN</Link>
        </div>
    );

    return (
        <header className="nav-bar">
            <h1 className="logo">NEWTUBE</h1>
            <form>
                <input type="text" placeholder="Search"/>
                <button type="submit">Search</button>
            </form>
            <div>
                {display}
            </div>
        </header>
    )
}