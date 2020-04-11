import React from 'react';

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
            <ul>
              {this.state.videos.map(video => {
                return (
                  <li key={video.id}>
                    <h2>{video.title}</h2>
                    <video src={video.videoUrl} controls/>
                  </li>
                );
              })}
            </ul>
          );
    }
}

export default Video;