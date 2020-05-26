import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="comment-index-item">
                <div className="comment-user-icon" style={{backgroundColor: this.props.color}}>
                        {this.props.username[0].toUpperCase()}
                </div>
                <div className="comment-content">
                    <div className="comment-username">{this.props.username}</div>
                    <div className="comment-body">{this.props.body}</div>
                </div>
            </div>
        )
    }
}

export default CommentIndexItem;