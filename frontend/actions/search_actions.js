import { searchVideos } from '../util/search';
import { RECEIVE_VIDEOS } from './video_actions';

const receiveSearched = videos => ({
    type: RECEIVE_VIDEOS,
    videos: videos
});

export const fetchSearched = (result) => dispatch => searchVideos(result)
    .then(data => dispatch(receiveSearched(data)))