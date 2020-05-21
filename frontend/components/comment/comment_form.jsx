import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ""
        }
    }

    handleClick(e) {

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.crea
    }
}