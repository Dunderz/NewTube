import { connect } from 'react-redux';
import UserShow from './user_show';
import { withRouter } from 'react-router-dom';
import { requestUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
        user: state.entities.users[ownProps.match.params.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestUser: id => dispatch(requestUser(id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));