import React from 'react';

class Like extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numLikes: null
        }

        this.handleLike = this.handleLike.bind(this);
    }

    componentDidMount() {
        this.props.requestLikes(this.props.videoId)
            .then(() => this.setState({ numLikes: this.props.likes.length}));
    }

    handleLike() {
        console.log("hey");
        this.props.createLike({
            value: "like",
            user_id: this.props.currentUser.id,
            likable_type: "Video",
            likable_id: this.props.videoId
        }).then(() => this.setState({ numLikes: this.props.likes.length}));
    }

    handleDislike() {
        this.props.createLike({ 
            value: "dislike",
            user_id: this.props.currentUser.id,
            likable_type: "Video",
            likable_id: this.props.videoId
        });
    }

    render() {
        let numLikes;
        if (this.state.numLikes === null) {
            numLikes = null
        } else {
            numLikes = this.state.numLikes;
        }

        return (
            <>
                <div>LIKE COMPONENT</div>
                <div onClick={this.handleLike} className="like-button">LIKE BUTTON</div>
                <div>LIKES: {numLikes}</div>
            </>
        )
    }
}

export default Like;