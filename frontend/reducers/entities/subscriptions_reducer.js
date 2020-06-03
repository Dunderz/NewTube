import { RECEIVE_SUBSCRIPTIONS, RECEIVE_SUBSCRIPTION, REMOVE_SUBSCRIPTION } from '../../actions/subscriber_actions';

const subscriptionsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_SUBSCRIPTIONS:
            return Object.assign({}, action.subscriptions );
        case RECEIVE_SUBSCRIPTION:
            return Object.assign({}, state, { [action.subscription.id]: action.subscription });
        case REMOVE_SUBSCRIPTION:
            let newState = Object.assign({}, state);
            delete newState[action.id];
            return newState;
        default:
            return state
    }
}

export default subscriptionsReducer;