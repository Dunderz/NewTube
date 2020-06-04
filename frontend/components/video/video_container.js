import { requestVideos } from '../../actions/video_actions'
import { connect } from 'react-redux';
import Video from './video';
import { withRouter } from 'react-router-dom';

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Video));