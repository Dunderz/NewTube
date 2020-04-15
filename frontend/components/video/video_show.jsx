import React from 'react';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestVideo(this.props.match.params.id);
    }

    render() {
        if (this.props.video === undefined) {
            return (
                <div>
                    nooo
                </div>
            )
        }

        const { video } = this.props;
        
        return (
            
            <div className="videoshow-container">
                <div className="videoshow-left-box">
                    <div className="videoshow-player">
                        <video id="video" src={video.videoUrl} controls/>
                    </div>
                    <div className="videoshow-info">
                        <div className="videoshow-title">
                            {video.title}
                        </div>
                    </div>
                </div>

                <div className="videoshow-right-box">

                </div>
            </div>
        );
    }
}

export default VideoShow;