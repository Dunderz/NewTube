import React from 'react';

class Subscription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({ toggle: !this.state.toggle })
        
        this.props.subscribe({
            channel_id: this.props.channelId,
            subscriber_id: this.props.currentUser.id
        });
    }

    render() {
        return ( 
            <div onClick={this.handleClick}>
                {this.props.subText}
            </div>
        )
    }
}

export default Subscription;