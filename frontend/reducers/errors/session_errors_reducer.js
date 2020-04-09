import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
    ERASE_SESSION_ERRORS
} from '../../actions/session';

export default (state = [], action) => {
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        case ERASE_SESSION_ERRORS:
            return [];
        default:
            return state;
    }
};