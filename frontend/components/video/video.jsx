import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

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
                            <div className="video-info-top-row">
                              <FontAwesomeIcon className="video-index-user-icon" icon={ faUserCircle}/>
                              <div className="video-index-details">
                                <div className="video-index-title">
                                  {video.title}
                                </div>
                                <div className="video-index-uploader">
                                  <p>Bob Jenkins</p>
                                </div>
                                <div className="video-index-views-date-container">
                                  <div className="video-index-views">
                                    2.2M views
                                  </div>
                                  <span className="videoshow-views-dot"></span>
                                  <div className="video-index-date">
                                    1 month ago
                                  </div>
                                </div>
                              </div>
                            </div>

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