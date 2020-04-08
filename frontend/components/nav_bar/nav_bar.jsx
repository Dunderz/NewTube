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
            <div className="top-left">
                <div className="hamburger">
                    <img id='hamburger' src={ window.hamburger } />
                </div>
                <img id='new-tube-logo' src={ window.newtube } />
            </div>
            <form>
                <input className="search-bar" type="text" placeholder="Search"/>
                <button className="search-button" type="submit">Search</button>
            </form>
            <div>
                {display}
            </div>
        </header>
    )
}