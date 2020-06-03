import ProfileMenu from './profile_menu';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session';

const mapStateToProps = state => {
    return {
        currentUser: state.session.currentUser,
        state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileMenu));