import React from 'react';

class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <>
                <div>
                    {this.props.comments.map(comment => {
                        return (
                                <div key={comment.id}>
                                    {comment.body}
                                </div>
                        )
                    })}
                </div>
            </>
        )
    }
}

export default Test;