import { connect } from 'react-redux';
import ResultsItem from './results_item';
import { fetchSearched } from '../../actions/search_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
    return {
        videos: Object.values(state.entities.videos)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSearched: result => dispatch(fetchSearched(result))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResultsItem));