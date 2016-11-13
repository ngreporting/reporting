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
        this.state = {thread:{messages:[]}}
    };
    monitorThread =(thread)=> {
        this.setState({thread})
    }

    componentWillReceiveProps(nextProps){
        this.reporting_client.monitorThread(nextProps.threadId, this.monitorThread);
    }

    render() {
        var messages = [];
        if(this.state.thread.messages){
            Object.values(this.state.thread.messages).map((messageId)=>{
                messages.push(<ChatMessage messageId={messageId} />
                )
            })
        }



        return (
            <div className="innerChat">
                <ChatHeader chatTitle={this.props.threadCurrentReport}/>

                <div className="chatContent">

                    {messages}





                </div>

                <ChatFooter threadId={this.props.threadId}/>

            </div>

        );
    }
}

export default Chat;