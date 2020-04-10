import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUpContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginContainer from './session/login_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import  VideoComponent  from './video/video';

const App = () => (
    <div>
        <VideoComponent />
        <Switch>
            <AuthRoute exact path="/login" component={LoginContainer}/>
            <AuthRoute exact path="/signup" component={SignUpContainer} />
            <Route exact path="/" component={NavBarContainer}/>
        </Switch>
    </div>
);

export default App;