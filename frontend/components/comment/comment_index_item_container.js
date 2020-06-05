import { connect } from 'react-redux';
import CommentIndexItem from './comment_index_item';
import { withRouter } from 'react-router-dom';
import { deleteComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestComments: videoId => dispatch(requestComments(videoId)),
        deleteComment: id => dispatch(deleteComment(id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentIndexItem));