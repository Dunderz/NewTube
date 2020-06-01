import { connect } from 'react-redux';
import Like from "./like";
import { 
    requestLikes,
    createLike,
    deleteLike
} from '../../actions/like_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser,
        likes: Object.values(state.entities.likes)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestLikes: videoId => dispatch(requestLikes(videoId)),
        createLike: like => dispatch(createLike(like)),
        deleteLike: likeId => dispatch(deleteLike(likeId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Like));
