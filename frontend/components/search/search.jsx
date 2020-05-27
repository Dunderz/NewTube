import React from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            search: '' 
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSearch(e) {
        e.preventDefault();
        const result = this.state.search.split(' ').join('+');
        this.props.moreProps.history.push(`/results?search_query=${result}`);
    }

    handleInput() {
        return e => {
            this.setState({ search: e.currentTarget.value })
        }
    }

    render() {
        return (
            <>
                <form className="search-bar" onSubmit={this.handleSearch}>
                    <input type="text" placeholder="Search" onChange={this.handleInput()} />
                    <button type="submit" className="search-button" type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </>
        )
    }
}

export default Search;