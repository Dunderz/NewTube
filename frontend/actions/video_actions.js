import { 
    fetchVideo,
    fetchVideos
 } from '../util/video';

export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';

const receiveVideo = ({ users, videos, comments }) => ({
    type: RECEIVE_VIDEO,
    users,
    videos,
    comments
});

const receiveVideos = videos => ({
    type: RECEIVE_VIDEOS,
    videos
});

export const requestVideo = id => dispatch => fetchVideo(id)
    .then(data => dispatch(receiveVideo(data)))

export const requestVideos = () => dispatch => fetchVideos()
    .then(videos => dispatch(receiveVideos(videos)))