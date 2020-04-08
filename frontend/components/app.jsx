import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUpContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginContainer from './session/login_container';

export default () => (
    <div>
        <Switch>
            <Route exact path="/login" component={LoginContainer}/>
            <Route exact path="/signup" component={SignUpContainer} />
            <Route path="/" component={NavBarContainer}/>
        </Switch>
    </div>
)