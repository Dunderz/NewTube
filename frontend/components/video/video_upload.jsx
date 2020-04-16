import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from '@fortawesome/free-solid-svg-icons';

class VideoUpload extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="video-upload-modal">
                <div className="video-upload-top-row">
                    <h1>Upload video</h1>
                </div>
                <div className="video-upload-bottom-row-container">
                    <div className="video-upload-bottom-row">
                        <div className="video-upload-icon-container">
                            <FontAwesomeIcon icon={faUpload} className="video-upload-icon" />
                        </div>
                        <div className="video-upload-direction">
                            <h2>Drag and drop a file you want to upload</h2>
                        </div>
                        <div className="video-upload-info">
                            <p>Your video will be private until you publish it</p>
                        </div>
                        <div className="video-upload-button">
                            <h2>SELECT FILE</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoUpload;