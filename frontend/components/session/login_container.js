import React from 'react';
import { connect } from 'react-redux';
import { login, eraseErrors } from '../../actions/session';
import Login from './login';

const mapStateToProps = state => ({
    errors: state.errors.session
})
const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    eraseErrors: () => dispatch(eraseErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);