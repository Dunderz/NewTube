import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import VideoComponent  from './video/video';


class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home">
                <NavBarContainer />
                <VideoComponent />
            </div>
        );
    }
}

export default Home;