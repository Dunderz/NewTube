import { connect } from 'react-redux';
import { createComment } from "../../actions/comment_actions";
import CommentForm from './comment_form';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
        videoId: ownProps
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createComment: comment => dispatch(createComment(comment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);