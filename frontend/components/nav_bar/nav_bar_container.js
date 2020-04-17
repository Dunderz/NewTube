import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));