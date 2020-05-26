import React from 'react';

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: this.props.location.search.slice(14).split("+").join(" ")
        };
    }

    componentDidMount() {
        this.props.fetchSearched(this.state.result);
    }

    render() {
        return (
            <div>RESULTS COMPONENT</div>
        )
    }
}

export default Results;