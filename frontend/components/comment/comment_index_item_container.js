import { connect } from 'react-redux';
import CommentIndexItem from './comment_index_item';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestComments: videoId => dispatch(requestComments(videoId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentIndexItem));