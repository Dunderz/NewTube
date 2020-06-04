import { connect } from 'react-redux';
import UserShow from './user_show';
import { withRouter } from 'react-router-dom';
import { requestUser } from '../../actions/user_actions';
import { 
    requestSelfSubscriptions, 
    requestChannelSubscribers,
    requestChannelSubscriptions
} from '../../actions/subscriber_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
        user: state.entities.users[ownProps.match.params.id],
        selfSubscriptions: state.entities.selfSubscriptions,
        channelSubscriptions: state.entities.channelSubscriptions,
        state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestUser: id => dispatch(requestUser(id)),
        requestSelfSubscriptions: id => dispatch(requestSelfSubscriptions(id)),
        requestChannelSubscriptions: id => dispatch(requestChannelSubscriptions(id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));