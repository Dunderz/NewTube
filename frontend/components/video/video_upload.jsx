import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from '@fortawesome/free-solid-svg-icons';

class VideoUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            videoFile: null,
            thumbnail: null
        }

        this.handleFile = this.handleFile.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleThumbnail = this.handleThumbnail.bind(this);
        this.showState = this.showState.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
    }

    handleInput(e) {
        this.setState({ title: e.currentTarget.value });
    }

    handleDescription(e) {
        this.setState({ description: e.currentTarget.value });
    }

    handleFile(e) {
        this.setState({
            videoFile: e.currentTarget.files[0]
        });
    }

    handleThumbnail(e) {
        this.setState({
            thumbnail: e.currentTarget.files[0]
        });
    }

    handleFileFind() {
        document.getElementById('file').click();
    }

    handleThumbnailFind() {
        document.getElementById('thumbnail').click();
    }

    showState() {
        console.log(this.state);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[video]', this.state.videoFile);
        formData.append('video[author_id]', this.props.currentUser.id);
        formData.append('video[thumbnail]', this.state.thumbnail);
        formData.append('video[description]', this.state.description);
        this.props.uploadVideo(formData).then((video) => {
            this.props.history.push(`/videos/${video.video.id}`);
            this.props.closeModal();
        });
    }

    render() {
        return (
            <div onClick={this.showState} className="video-upload-modal">
                <div className="video-upload-top-row">
                    <h1>Upload video</h1>
                </div>
                <div className="video-upload-bottom-row-container">
                    
                    <div className="video-upload-bottom-row">
                        {/* <div className="video-upload-icon-container">
                            <FontAwesomeIcon icon={faUpload} className="video-upload-icon" />
                        </div>
                        <div className="video-upload-direction">
                            <h2>Drag and drop a file you want to upload</h2>
                        </div>
                        <div className="video-upload-info">
                            <p>Your video will be private until you publish it</p>
                        </div> */}
                        <form onSubmit={this.handleSubmit} className="video-upload-form">
                            <div className="video-upload-left">
                                <h1>Details</h1>
                                <div className="video-upload-title-container">
                                    <p>Title (required)</p>
                                    <textarea placeholder="Add a title that describes your video" maxLength="100" type="text" onChange={this.handleInput} className="video-upload-title" />
                                </div>
                                <div className="video-upload-description-container">
                                    <p>Description (optional)</p>
                                    <textarea placeholder="Enter a Description (Optional)" maxLength="600" type="text" onChange={this.handleDescription} className="video-upload-description" />
                                </div>
                                <div className="video-upload-file" onClick={this.handleThumbnailFind}>
                                    <h2>SELECT THUMBNAIL</h2>
                                    <input type="file" id="thumbnail" accept='image/*' onChange={this.handleThumbnail} />
                                </div>
                            </div>
                            <div className="video-upload-right">
                                <div className="video-upload-file" onClick={this.handleFileFind}>
                                    <h2>SELECT VIDEO</h2>
                                    <input type="file" id="file" accept='video/*' onChange={this.handleFile} />
                                    <button className="video-upload-button">UPLOAD</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoUpload;