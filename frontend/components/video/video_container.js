import { requestVideos } from '../../actions/video_actions'
import { connect } from 'react-redux';
import Video from './video';

const mapStateToProps = (state) => {
    return {
        videos: Object.values(state.entities.videos),
        currentUser: state.session.currentUser,
        state
    }
};

const mapDispatchToProps = dispatch => {
    return {
        requestVideos: () => dispatch(requestVideos())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Video);