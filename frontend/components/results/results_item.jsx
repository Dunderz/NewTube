import React from 'react';

class ResultsItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { video } = this.props;
        return (
            <>
                <div>{ video.title }</div>
            </>
        )
    }
}

export default ResultsItem;