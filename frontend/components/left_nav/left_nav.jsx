import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { 
    faHome,
    faFolderOpen
} from '@fortawesome/free-solid-svg-icons';
import { 
    faGithub,
    faAngellist,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

class LeftNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="left-nav-container">
                    <Link className="left-nav-link" to="/">
                        <div className="left-nav-icon"><FontAwesomeIcon icon={faHome} /></div>
                        <div className="left-nav-icon-title">Home</div>
                    </Link>
                    <a className="left-nav-link" href="https://github.com/DunderProto/NewTube" target="_blank">
                        <div className="left-nav-icon"><FontAwesomeIcon icon={faGithub} /></div>
                        <div className="left-nav-icon-title">Github</div>
                    </a>
                    <a className="left-nav-link" href="https://www.linkedin.com/in/isaac-nam-823180133/" target="_blank">
                        <div className="left-nav-icon"><FontAwesomeIcon icon={faLinkedin} /></div>
                        <div className="left-nav-icon-title">LinkedIn</div>
                    </a>
                    <a className="left-nav-link" href="https://angel.co/u/isaac-nam" target="_blank">
                        <div className="left-nav-icon"><FontAwesomeIcon icon={faAngellist} /></div>
                        <div className="left-nav-icon-title">AngelList</div>
                    </a>
                    <a className="left-nav-link" href="https://dunderproto.github.io/" target="_blank">
                        <div className="left-nav-icon"><FontAwesomeIcon icon={faFolderOpen} /></div>
                        <div className="left-nav-icon-title">Portfolio</div>
                    </a>
                </div>
            </>
        );
    }
}

export default LeftNav;