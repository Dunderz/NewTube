import React from 'react';
import { Link } from 'react-router-dom';

class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: []
        }
        this.fetchPosts = this.fetchPosts.bind(this);
    }

    fetchPosts() {
        $.ajax({
            url: "/api/videos"
        }).then(videos => {
            this.setState({ videos });
        });
    }

    componentDidMount() {
        this.fetchPosts();
    }

    render() {
        return (
            <section className="video-section">
              {this.state.videos.map(video => {
                return (
                    
                      <div key={video.id} className="video-container">                    
                        <div className="video-index" key={video.id}>
                          <video src={video.videoUrl} controls/>
                        </div>
                        <div className="video-info">
                          <h2>{video.title}</h2>
                        </div>
                      </div>
                    
                );
              })}
            </section>
          );
    }
}

export default Video;