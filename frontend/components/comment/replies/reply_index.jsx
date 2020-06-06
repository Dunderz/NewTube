import React from 'react';
import ReplyIndexItemContainer from './reply_index_item_container';
import timeAgo from '../../video/video_time';
 
class ReplyIndex extends React.Component {
    constructor(props) {
        super(props);
    }
 
    componentDidUpdate() {
 
    }
 
    render() {
 
        let replies = this.props.replies;
        let replyIndexClass;
 
        if (replies.length === 0) {
            replyIndexClass = "reply-index-hide";
        } else {
            replyIndexClass = "reply-index-container";
        }
 
        return (
            <>
                <div className={`${replyIndexClass}`}>
                    {replies.map(reply => {
                        let timeSinceCommented = timeAgo(reply.created_at);
                        return (
                            <ReplyIndexItemContainer
                                handleDeleteCommentState={this.props.handleDeleteCommentState}
                                key={reply.id}
                                body={reply.body}
                                username={reply.username}
                                color={reply.user.color}
                                time={timeSinceCommented}
                                replyId={reply.id}
                                videoId={this.props.videoId}
                                replies={reply.replies}
                                user={reply.user}
                            />
                        )
                    })}
                </div>
            </>
        )
    }
}
 
export default ReplyIndex;
