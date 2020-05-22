import { connect } from 'react-redux';
import { requestComments } from '../../actions/comment_actions';
import CommentIndex from './comment_index';

const mapStateToProps = state => {
    return {
        comments: state.entities.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestComments: videoId => dispatch(requestComments(videoId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);