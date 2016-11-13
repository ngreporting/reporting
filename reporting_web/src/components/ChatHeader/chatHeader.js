import React, { Component } from 'react';
import './chatHeader.css';


class ChatHeader extends Component {

    constructor(props) {
        super(props);
    };


    render() {


        return (
            <div className="header">
                <div className="title">
                    <h1>{this.props.chatTitle}</h1>
                </div>

                <div className="actions">
                    <i className="ion-ios-settings"></i>
                    <i className="ion-ios-eye-off"></i>
                    <i className="ion-ios-checkmark-circle-outline"></i>


                </div>
            </div>
        );
    }
}

export default ChatHeader;