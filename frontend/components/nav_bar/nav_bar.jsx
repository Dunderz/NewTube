import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
            <div>
                <p>Hello, { currentUser.username }</p>
                <button onClick={logout}>Log Out</button>
            </div>
        ) : ( 
        
            <Link className="nav-sign-in-link" to="/login">
                <div className="nav-sign-in">SIGN IN</div>
            </Link>
    );

    return (
        <header className="nav-bar">
            <div className="top-left">
                <div className="hamburger">
                    <img id='hamburger' src={ window.hamburger } />
                </div>
                <img id='new-tube-logo' src={ window.newtube } />
            </div>
            <form className="search-bar">
                <input type="text" placeholder="Search"/>
                <button className="search-button" type="submit">Search</button>
            </form>
            <div className="top-right">
                {display}
            </div>
        </header>
    )
}