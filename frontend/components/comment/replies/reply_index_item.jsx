import React from 'react';

class ReplyIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="comment-index-item">
                    <div className="reply-user-icon" style={{backgroundColor: this.props.color}}>
                            {this.props.username[0].toUpperCase()}
                    </div>
                    <div className="comment-content">
                        <div className="comment-username-date-container">
                            <div className="comment-username">{this.props.username}</div>
                            <div className="comment-date">{this.props.time}</div>
                        </div>
                        <div className="comment-body">{this.props.body}</div>
                        {/* <div className="comment-likes">
                            <LikesContainer commentId={this.props.commentId} videoId={this.props.videoId} type="Comment"/>
                        </div> */}
                    </div>
                </div>
            </>
        )
    }
}

export default ReplyIndexItem;