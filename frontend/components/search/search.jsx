import React from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.ownProps);
        return (
            <>
                <form className="search-bar">
                    <input type="text" placeholder="Search"/>
                    <button type="submit" className="search-button" type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </>
        )
    }
}

export default Search;