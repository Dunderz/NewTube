import React from 'react';

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
            <div>
                {this.props.videos.map(video => {
                    return (
                        <h1 key={video.id}>{video.title}</h1>
                    )
                })}
            </div>
        )
    }
}

export default Results;