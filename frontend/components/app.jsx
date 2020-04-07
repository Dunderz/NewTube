import React from 'react';
import { Route } from 'react-router-dom';
import SignUpContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container';

export default () => (
    <div>
        <h1>NewTube</h1>
        <Route path="/" component={NavBarContainer}/>
        <Route path="/signup" component={SignUpContainer} />
    </div>
)