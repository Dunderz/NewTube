import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUpContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Home from './home/home';
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal />
        <Switch>
            <AuthRoute exact path="/login" component={LoginContainer}/>
            <AuthRoute exact path="/signup" component={SignUpContainer} />
        </Switch>
        <Route path="/" component={Home}/>
    </div>
);

export default App;