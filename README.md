# NewTube

Welcome to Newtube! This project is a pixel perfect clone of Youtube. You can see the live version [here.](https://new-tube-app.herokuapp.com/#/)

NewTube is a clone of YouTube with functionalities such as signing up, viewing, searching and uploading videos. In addition, users of NewTube are able to subscribe to other channels, like and comment on videos as well.


## Technologies

- Frontend:
    - React
    - Redux
    - HTML 5
    - CSS 3
- Backend:
    - Ruby on Rails
    - PostgreSQL
- Heroku (website hosting)
- AWS S3 (image and video storage)

## Features

### User Authentication
- Users are able to create new accounts or login if they are already registered as well as logout or signing in with a demo account. Newly created accounts are also assigned a color that shows up in the profile icon to give each user a unique quality.

![alt text](img/user-auth.gif "User Authentication")

### Video Upload
- Existing users can upload their own videos with a required thumbnail image, and owners of their videos have the option of deleting them.

![alt text](img/video-upload.gif "Video Upload")

- The current user in the process of uploading sends their video information to a FormData object, and upon completion of the video rendering, they are redirected to that video's show page. Submitting the upload form is show in the code below.

*VideoUpload*
```javascript
handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('video[title]', this.state.title);
    formData.append('video[video]', this.state.videoFile);
    formData.append('video[author_id]', this.props.currentUser.id);
    formData.append('video[thumbnail]', this.state.thumbnail);
    formData.append('video[description]', this.state.description);
    this.setState({ loading: true });
    this.props.uploadVideo(formData).then((video) => {
        this.props.history.push(`/videos/${video.video.id}`);
        this.props.closeModal();
    });
}
```

### Comments section
- Videos can be commented on, and comments can also be replied to. This is achieved through polymorphic associations, making comments and videos both commentable types.

![alt text](img/comments.gif "Comments section")

- Every comment item possesses their own array of replies, which means it is necessary to have reply and delete forms for each of them. Displaying either form is dependent upon the comment item's state which is triggered by the user clicking certain buttons. This is demonstrated through conditional logic in the code shown below.

*CommentIndexItem*
```javascript
let replyForm;

if (this.state.showReplyForm) {
    replyForm = (
        <ReplyFormContainer 
            handleCreateComment={this.props.handleCreateComment} 
            hideReply={this.handleHideReply}
            parentCommentId={this.props.commentId}
            videoId={this.props.videoId}
        />
    )
}

let deletePopUp;
let ellipsisAnchor;

if (this.state.showDeleteForm) {
    ellipsisAnchor = "comment-ellipsis-anchor";
    deletePopUp = (
        <CommentDeleteContainer
            handleHideDeleteForm={this.handleHideDeleteForm} 
            commentId={this.props.commentId}
            videoId={this.props.videoId}
        />
    )
} else {
    ellipsisAnchor = "hide-ellipsis";
}
```

### Subscriptions
- Signed in users can subscribe to multiple NewTube channels, and their subscriptions show up in both their profile page and the modal side navigation bar. 

![alt text](img/subscriptions.gif "Subscriptions")

## Additional Features
- Search
    - Users can search for videos based on their titles with the search-bar.
- Likes / Dislikes
    - Users are able to like or dislike videos.
