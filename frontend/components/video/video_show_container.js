import { connect } from 'react-redux';
import { requestVideo, requestVideos } from '../../actions/video_actions';
import { requestComments } from '../../actions/comment_actions';
import { subscribe, unsubscribe, requestChannelSubscribers, requestSelfSubscriptions } from '../../actions/subscriber_actions';
import VideoShow from './video_show';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
        video: state.entities.videos[ownProps.match.params.id],
        videos: Object.values(state.entities.videos),
        comments: Object.values(state.entities.comments),
        ownProps: ownProps,
        currentUser: state.session.currentUser,
        subscribers: state.entities.subscriptions,
        state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestVideo: (id) => dispatch(requestVideo(id)),
        requestVideos: () => dispatch(requestVideos()),
        requestComments: (id) => dispatch(requestComments(id)),
        subscribe: newSub => dispatch(subscribe(newSub)),
        unsubscribe: id => dispatch(unsubscribe(id)),
        requestChannelSubscribers: id => dispatch(requestChannelSubscribers(id)),
        requestSelfSubscriptions: id => dispatch(requestSelfSubscriptions(id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoShow));