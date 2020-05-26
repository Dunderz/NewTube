import React from 'react';

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: this.props.location.search.slice(14).split("+").join(" "),
            update: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchSearched(this.state.result)
        .then(() => console.log(this.props));
    }

    componentDidUpdate() {
    }

    handleClick() {
        this.setState({ update: true })
    }

    render() {
        return (
            <div onClick={this.handleClick} >RESULTS COMPONENT</div>
        )
    }
}

export default Results;