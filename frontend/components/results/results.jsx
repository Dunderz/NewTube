import React from 'react';

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: this.props.location.search.slice(14).split("+").join(" ")
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        debugger
        this.props.fetchSearched(this.state.result)
        .then(() => console.log(this.state.result));
    }

    handleClick() {
    }

    render() {
        return (
            <div onClick={this.handleClick} >RESULTS COMPONENT</div>
        )
    }
}

export default Results;