import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import timeAgo from './video_time';

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

    componentWillUnmount() {
      
    }

    

    render() {
        if (this.props.videos === undefined) {
          return (
            <></>
          )
        }
        return (
            <section className="video-section">
              <div className="video-index-recommended-container">
                <div className="video-recommended">
                  <h2>Recommended</h2>
                </div>
                <div className="video-index-videos">
                  {this.props.videos.map(video => {
                    console.log(video);
                    return (
                          <div key={video.id} className="video-container">
                            <Link className="video-link" to={`/videos/${video.id}`}>                  
                              <div className="video-index">
                                <img src={video.thumbnailUrl} />
                              </div>
                              <div className="video-info">
                                <div className="video-info-top-row">
                                  <div className="video-user-icon" style={{backgroundColor: video.user.color}}>
                                      {video.user.username[0].toUpperCase()}
                                  </div>
                                  <div className="video-index-details">
                                    <div className="video-index-title">
                                      {video.title}
                                    </div>
                                    <div className="video-index-uploader">
                                      <p>{video.user.username}</p>
                                    </div>
                                    <div className="video-index-views-date-container">
                                      <div className="video-index-views">
                                        {video.views} views
                                      </div>
                                      <span className="videoshow-views-dot"></span>
                                      <div className="video-index-date">
                                        {timeAgo(video.created_at)}
                                      </div>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </Link> 
                          </div>
                        
                    );
                  })}
                  </div>
              </div>
            </section>
          );
    }
}

export default Video;