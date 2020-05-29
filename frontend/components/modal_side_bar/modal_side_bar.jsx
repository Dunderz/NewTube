import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHome,
    faFolderOpen
} from '@fortawesome/free-solid-svg-icons';
import { 
    faGithub,
    faAngellist,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

class ModalSideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="modal-side-bar-container">
                    <div className="top-left">
                        <div className="hamburger-container noSelect" onClick={() => this.props.closeModal()}>
                            <img id='hamburger-logo' src={ window.hamburger } />
                        </div>
                        <Link className="new-tube-top-left-logo noSelect" to="/"><img id='new-tube-logo' src={ window.newtube } /></Link>
                    </div>
                    <div className="modal-side-bar-links">
                        <Link className="modal-side-bar-link" to="/">
                            <div className="modal-side-bar-icon"><FontAwesomeIcon icon={faHome} /></div>
                            <div className="modal-side-bar-title">Home</div>
                        </Link>
                        <a className="modal-side-bar-link" href="https://github.com/DunderProto/NewTube" target="_blank">
                            <div className="modal-side-bar-icon"><FontAwesomeIcon icon={faGithub} /></div>
                            <div className="modal-side-bar-title">Github</div>
                        </a>
                        <a className="modal-side-bar-link" href="https://www.linkedin.com/in/isaac-nam-823180133/" target="_blank">
                            <div className="modal-side-bar-icon"><FontAwesomeIcon icon={faLinkedin} /></div>
                            <div className="modal-side-bar-title">LinkedIn</div>
                        </a>
                        <a className="modal-side-bar-link" href="" target="_blank">
                            <div className="modal-side-bar-icon"><FontAwesomeIcon icon={faAngellist} /></div>
                            <div className="modal-side-bar-title">AngelList</div>
                        </a>
                        <a className="modal-side-bar-link" href="" target="_blank">
                            <div className="modal-side-bar-icon"><FontAwesomeIcon icon={faFolderOpen} /></div>
                            <div className="modal-side-bar-title">Portfolio</div>
                        </a>
                        </div>
                </div>
            </>
        )
    }
} 

export default ModalSideBar;