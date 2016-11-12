import React, { Component } from 'react';
import './chatFooter.css';


class ChatFooter extends Component {
    render() {
        return (
            <div className="footer">
                <input type="text" className="chatInput" placeholder="Schreibe eine Nachricht"/>
                <i className="ion-ios-paper-plane"></i>


            </div>
        );
    }
}

export default ChatFooter;