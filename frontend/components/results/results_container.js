import { connect } from 'react-redux';
import Results from './results';
import { fetchSearched } from '../../actions/search_actions';

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

export default connect(mapStateToProps, mapDispatchToProps)(Results);