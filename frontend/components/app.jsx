import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUpContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Home from './home/home';

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/login" component={LoginContainer}/>
            <AuthRoute exact path="/signup" component={SignUpContainer} />
            <Route exact path="/" component={Home}/>
        </Switch>
    </div>
);

export default App;