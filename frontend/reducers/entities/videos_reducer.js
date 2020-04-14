import {
    RECEIVE_VIDEO,
    RECEIVE_VIDEOS
} from '../../actions/video_actions';

const videosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_VIDEO:
            return Object.assign({}, action.videos);
        case RECEIVE_VIDEOS:
            return Object.assign({}, action.videos);
        default:
            return state;
    }
}

export default videosReducer;