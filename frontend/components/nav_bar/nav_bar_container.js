import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session';
import { withRouter } from 'react-router-dom';
import { requestSelfSubscriptions } from '../../actions/subscriber_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    ownProps: ownProps,
    selfSubscriptions: state.entities.selfSubscriptions,
    state
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    requestSelfSubscriptions: id => dispatch(requestSelfSubscriptions(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));