import React, { Component } from 'react';
import ChatHeader from '../ChatHeader/chatHeader';
import ChatFooter from '../ChatFooter/chatFooter';
import ReportingClient from '../../reporting_client';

import ChatMessage from '../ChatMessage/chatMessage';
import './chat.css';


class Chat extends Component {
    constructor(props) {
        super(props);
        this.reporting_client = new ReportingClient();
        this.state = {
            thread: {
                messages:[]
            }
        }
    }

    monitorThread (thread) {
        console.log('get new thread value ', thread)
        this.setState({thread})
    }

    componentWillReceiveProps(props) {
        if (typeof this.unregister == 'function') {
            this.unregister();
            this.unregister = undefined;
        }
        if (props.currentThread) {
            this.unregister = this.reporting_client.monitorThread(props.currentThread, this.monitorThread.bind(this));
        } else {
            this.setState({
                thread: {
                    messages:[]
                }
            })
        }
    }

    render() {
        var messages = [];
        if(this.state.thread.messages) {
            messages = Object.values(this.state.thread.messages).map((messageId)=>{
                return (
                    <ChatMessage messageId={messageId} key={messageId}/>
                );
            });
        }



        return (
            <div className="innerChat">
                <ChatHeader/>

                <div className="chatContent">

                    {messages}

                </div>

                <ChatFooter setCurrentThread={this.props.setCurrentThread} currentThread={this.props.currentThread} currentReport={this.props.currentReport}/>

            </div>

        );
    }
}

export default Chat;