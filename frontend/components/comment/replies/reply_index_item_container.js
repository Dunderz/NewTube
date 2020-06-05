import ReplyIndexItem from './reply_index_item';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteComment } from '../../../actions/comment_actions';

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteComment: id => dispatch(deleteComment(id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReplyIndexItem));
