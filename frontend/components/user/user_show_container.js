import { connect } from 'react-redux';
import UserShow from './user_show';
import { withRouter } from 'react-router-dom';
import { requestUser } from '../../actions/user_actions';
import { 
    requestSelfSubscriptions, 
    requestChannelSubscribers,
    requestChannelSubscriptions,
    subscribe, 
    unsubscribe
} from '../../actions/subscriber_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
        user: state.entities.users[ownProps.match.params.id],
        selfSubscriptions: state.entities.selfSubscriptions,
        channelSubscriptions: state.entities.channelSubscriptions,
        subscribers: state.entities.subscriptions,
        state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestUser: id => dispatch(requestUser(id)),
        requestSelfSubscriptions: id => dispatch(requestSelfSubscriptions(id)),
        requestChannelSubscriptions: id => dispatch(requestChannelSubscriptions(id)),
        requestChannelSubscribers: id => dispatch(requestChannelSubscribers(id)),
        subscribe: newSub => dispatch(subscribe(newSub)),
        unsubscribe: id => dispatch(unsubscribe(id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));