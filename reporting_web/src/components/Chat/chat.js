import React, { Component } from 'react';
import ChatHeader from '../ChatHeader/chatHeader';
import ChatFooter from '../ChatFooter/chatFooter';

import './chat.css';

class Chat extends Component {
    render() {
        return (
            <div className="innerChat">
                <ChatHeader/>

                <div className="chatContent">

                    <div className="pinnedMessage">
                        <div className="chat guest">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                            <span>12.11.2016 | 20:11 Uhr</span>
                        </div>
                        <i className="ion-ios-star"></i>
                    </div>

                    <h4 className="newDate">12.11.2016</h4>

                    <div className="chat me">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
                        <span>20:13 Uhr</span>
                    </div>

                    <div className="chat me">
                        <p>Lorem ipsum dolor sit amet elit. </p>
                        <span>20:13 Uhr</span>
                    </div>


                </div>

                <ChatFooter/>

            </div>

        );
    }
}

export default Chat;