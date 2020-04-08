import React from 'react';
import { withRouter, Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.currentUserId) };
};

const Auth = ({ component: Component, path, loggedIn }) => (
    <Route
      path={path}
      render={props => (
      loggedIn ? <Redirect to="/" /> : <Component {...props} />
      )}
    />
  );

  const Protected = ({ component: Component, path, loggedIn }) => (
    <Route
      path={path}
      render={props => (
      loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
      )}
    />
  );

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, undefined)(Protected));
