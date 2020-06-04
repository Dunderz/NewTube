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
        this.state = {
            klass: ''
        }
    }

    componentDidMount() {
        this.setState({ klass: "modal-side-bar-container" })
        if (this.props.currentUser) {
            this.props.requestSelfSubscriptions(this.props.currentUser.id);
        }
    }

    render() {

        const { selfSubscriptions } = this.props;
        let subsArray = [];

        for (let k in selfSubscriptions) {
            subsArray.push(selfSubscriptions[k]);
        }

        let subsContainer;
        if (subsArray.length > 0 && this.props.currentUser) {
            subsContainer = (
                <div className="modal-side-bar-subscriptions">
                    <div className="modal-side-bar-subscriptions-header">SUBSCRIPTIONS</div>
                    {subsArray.map(sublink => {
                        return (
                            <Link onClick={() => this.props.closeModal()} to={`/users/${sublink.subscription.id}`} key={sublink.id} className="modal-side-bar-sub-link">
                                <div className="modal-side-bar-sub-icon" style={{backgroundColor: sublink.subscription.color}}>
                                    {sublink.subscription.username[0].toUpperCase()}
                                </div>
                                <div className="modal-side-bar-sub-name">
                                    {sublink.subscription.username}
                                </div>
                            </Link>
                        )
                    })}
                </div>
            )
        }

        return (
            <>
                <div className="modal-side-bar-container">
                    <div className="top-left">
                        <div className="hamburger-container noSelect" onClick={() => this.props.closeModal()}>
                            <img id='hamburger-logo' src={ window.hamburger } />
                        </div>
                        <Link className="new-tube-top-left-logo noSelect" onClick={() => this.props.closeModal()} to="/"><img id='new-tube-logo' src={ window.newtube } /></Link>
                    </div>
                    <div className="modal-side-bar-links">
                        <Link className="modal-side-bar-link" onClick={() => this.props.closeModal()} to="/">
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
                        <a className="modal-side-bar-link" href="https://angel.co/u/isaac-nam" target="_blank">
                            <div className="modal-side-bar-icon"><FontAwesomeIcon icon={faAngellist} /></div>
                            <div className="modal-side-bar-title">AngelList</div>
                        </a>
                        <a className="modal-side-bar-link" href="https://dunderproto.github.io/" target="_blank">
                            <div className="modal-side-bar-icon"><FontAwesomeIcon icon={faFolderOpen} /></div>
                            <div className="modal-side-bar-title">Portfolio</div>
                        </a>
                    </div>
                    { subsContainer }
                </div>
            </>
        )
    }
} 

export default ModalSideBar;