import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
 
class ReplyDelete extends React.Component {
    constructor(props) {
        super(props);
 
        this.state = {
            display: true
        }
 
        this.deleteContainer = React.createRef();
        this.handleHideForm = this.handleHideForm.bind(this);
        this.handleDeleteComment = this.handleDeleteComment.bind(this);
    }
 
    componentDidMount() {
        document.addEventListener('click', this.handleHideForm);
    }
 
    handleHideForm(e) {
        const current = this.deleteContainer.current;

        let outside;
        if (current) {
            if (current.contains(e.target)) {
                outside = false;
            } else {
                outside = true;
            }
        } else {
            outside = false;
        }

        if (outside === true) {
            this.setState({ active: false });
            this.props.handleHideDeleteForm();
        } 
    }
 
    handleDeleteComment() {
        // this.props.deleteComment(this.props.commentId)
        //     .then(() => this.setState({ display: false }))
        this.setState({ display: false });
        this.props.deleteComment(this.props.replyId)
            .then(() => this.props.handleDeleteCommentState())
    }
 
    render() {
        let commentDeleteComponent;
        
        if (this.state.display) {
            commentDeleteComponent = (
                <div className="comment-delete-pop-up" onClick={this.handleDeleteComment} ref={this.deleteContainer}>
                    <FontAwesomeIcon className="comment-delete-pop-up-icon" icon={faTrash} />
                    <div className="comment-delete-pop-up-text">Delete</div>
                </div>
            )
        }
        return (
            <>
                {commentDeleteComponent}
            </>
        )
    }
}
 
export default ReplyDelete;
