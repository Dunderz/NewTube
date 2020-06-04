import {
    RECEIVE_VIDEO,
    RECEIVE_VIDEOS,
    REMOVE_VIDEO
} from '../../actions/video_actions';

const videosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_VIDEO:
            return Object.assign({}, state, { [action.video.id]: action.video} );
        case RECEIVE_VIDEOS:
            return Object.assign({}, action.videos);
        case REMOVE_VIDEO:
            let newState = Object.assign({}, state);
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
}

export default videosReducer;