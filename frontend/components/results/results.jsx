import React from 'react';
import ResultsItem from './results_item';

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: this.props.location.search.slice(14).split("+").join(" ")
        };
    }

    componentDidMount() {
        this.props.fetchSearched(this.state.result)
    }

    render() {
        if (this.props.videos === undefined) {
            return (
                <></>
            )
        }
        return (
            <>
                
                <div className="results-container">
                    <div className="results-for-input">
                        RESULTS FOR "{this.state.result}"
                    </div>
                    <div className="results-videos">
                        {this.props.videos.map(video => {
                            return (
                                <>
                                    <ResultsItem video={video} />
                                </>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}

export default Results;