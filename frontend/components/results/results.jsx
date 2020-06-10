import React from 'react';
import ResultsItemContainer from './results_item_container';
import LeftNav from '../left_nav/left_nav';

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: this.props.location.search.slice(14).split("+").join(" "),
            searched: false
        };

        this.handleURL = this.handleURL.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchSearched(this.state.result);
    }

    componentDidUpdate() {
        window.scrollTo(0, 0);
        this.handleURL();
        if (this.state.searched) {
            this.props.fetchSearched(this.state.result);
            this.setState({ searched: false });
        }
    }

    handleURL() {
        let query = this.props.location.search.slice(14).split("+").join(" ");
        if (query != this.state.result) {
            this.setState({ result: query });
            this.setState({ searched: true });
        }
    }

    render() {
        if (this.props.videos === undefined) {
            return (
                <></>
            )
        }

        return (
            <div className="results-component">
                <div className="left-nav-component">
                    <LeftNav />
                </div>
                <div className="results-container">
                    <div className="results-for-input">
                        RESULTS FOR "{this.state.result}"
                    </div>
                    <div className="results-videos">
                        {this.props.videos.map(video => {
                            return (
                                <div key={video.id}>
                                    <ResultsItemContainer video={video} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Results;