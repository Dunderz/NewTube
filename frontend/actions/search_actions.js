import { searchVideos } from '../util/search';
import { RECEIVE_VIDEOS } from './video_actions';

const receiveSearched = data => ({
    type: RECEIVE_VIDEOS,
    data
});

export const fetchSearched = (result) => dispatch => searchVideos(result)
    .then(data => dispatch(receiveSearched(data)))