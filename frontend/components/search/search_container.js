import { connect } from 'react-redux';
import Search from './search';
import { fetchSearched } from '../../actions/search_actions';
import { withRouter } from "react-router";

const mapStateToProps = (state, ownProps) => {
    return {
        ownProps: ownProps
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSearched: (result) => dispatch(fetchSearched(result))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));