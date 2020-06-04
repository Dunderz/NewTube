import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RecommendedVideos from './recommended_videos';

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecommendedVideos));