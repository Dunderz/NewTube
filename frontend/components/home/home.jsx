import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import MainContent from '../main_content/main_content';


class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home">
                <NavBarContainer />
                <MainContent />
            </div>
        );
    }
}

export default Home;