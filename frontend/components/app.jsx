import React from 'react';
import { Route } from 'react-router-dom';
import SignUpContainer from './session/signup_container';

export default () => (
    <div>
        <h1>NewTube</h1>
        <Route path="/signup" component={SignUpContainer} />
    </div>
)