import React from 'react';
import ReplyIndexItemContainer from './reply_index_item_container';
import timeAgo from '../../video/video_time';

class ReplyIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let replies = this.props.replies;

        console.log(replies);
        return (
            <>
                {replies.map(reply => {
                    let timeSinceCommented = timeAgo(reply.created_at);
                    return (
                        <ReplyIndexItemContainer
                            body={reply.body}
                            username={reply.username}
                            color={reply.user.color}
                            time={timeSinceCommented}
                            replyId={reply.id}
                            videoId={this.props.videoId}
                            handleCreateComment={this.handleCreateComment}
                            replies={reply.replies}
                        />
                    )
                })}
            </>
        )
    }
}

export default ReplyIndex;