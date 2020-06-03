import { 
    RECEIVE_LIKES,
    RECEIVE_LIKE,
    REMOVE_LIKE
} from '../../actions/like_actions';

const likesReducer = ( state = {}, action ) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_LIKES:
            return Object.assign({}, action.likes);
        case RECEIVE_LIKE:
            return Object.assign({}, state, { [action.like.id]: action.like });
        case REMOVE_LIKE:
            let newState = Object.assign({}, state);
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
}

export default likesReducer;