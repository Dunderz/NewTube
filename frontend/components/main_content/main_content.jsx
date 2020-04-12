import React from 'react';
import VideoComponent  from '../video/video';
import LeftNav from '../left_nav/left_nav';

class MainContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="main-content">
                    <div className="left-nav-component">
                        <LeftNav />
                    </div>
                    <div className="video-component">
                        <VideoComponent />
                    </div>
                </div>  
            </>
        );
    }
}

export default MainContent;