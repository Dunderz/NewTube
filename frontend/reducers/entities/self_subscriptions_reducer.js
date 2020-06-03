import { RECEIVE_SELF_SUBSCRIPTIONS } from '../../actions/subscriber_actions';
// case RECEIVE_SELF_SUBSCRIPTIONS:
//             return Object.assign({}, action.selfSubscriptions );

const selfSubscriptionsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_SELF_SUBSCRIPTIONS:
            return Object.assign({}, action.selfSubscriptions );
        default:
            return state;
    }
}

export default selfSubscriptionsReducer;