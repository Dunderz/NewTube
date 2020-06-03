import { RECEIVE_CHANNEL_SUBSCRIPTIONS } from '../../actions/subscriber_actions';

const channelSubscriptionsReducer = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_CHANNEL_SUBSCRIPTIONS:
            return Object.assign({}, action.channelSubscriptions);
        default:
            return state;
    }
}

export default channelSubscriptionsReducer;