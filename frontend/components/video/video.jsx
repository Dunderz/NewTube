import React from 'react';
import { Link } from 'react-router-dom';

class Video extends React.Component {
    constructor(props) {
        super(props);
        
    }

    // fetchPosts() {
    //     $.ajax({
    //         url: "/api/videos"
    //     }).then(videos => {
    //         this.setState({ videos });
    //     });
    // }

    componentDidMount() {
        this.props.requestVideos();
    }

    render() {
        if (this.props.videos === undefined) {
          return (
            <></>
          )
        }
        return (
            <section className="video-section">
              {this.props.videos.map(video => {
                return (
                    
                      <div className="video-container"> 
                        <Link key={video.id} className="video-link" to={`/videos/${video.id}`}>                  
                          <div className="video-index">
                            <video src={video.videoUrl} controls={false}/>
                          </div>
                          <div className="video-info">
                            <h2>{video.title}</h2>
                          </div>
                        </Link> 
                      </div>
                    
                );
              })}
            </section>
          );
    }
}

export default Video;