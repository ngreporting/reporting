import React, { Component } from 'react';
import './chatMessage.css';
import ReportingClient from '../../reporting_client';

import moment from "moment"


class ChatMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {message:{}};
        this.reporting_client = new ReportingClient();
    }

    monitorMessage = (message)=> {
        this.setState({message})
    }

    componentWillReceiveProps(props){
        console.log('recieve props chatmessage');
        if (typeof this.unregister === 'function') {
            this.unregister();
            this.unregister = undefined;
        }
        if (props.messageId) {
            console.log('registered props chatmessage');
            this.unregister = this.reporting_client.monitorMessage(props.messageId, this.monitorMessage);
        } else {
            console.log('emptied state props chatmessage');
            this.setState({message:{}})
        }
    }

    componentDidMount(){
        console.log('mounted props chatmessage');
        if (typeof this.unregister === 'function') {
            this.unregister();
            this.unregister = undefined;
        }
        if (this.props.messageId) {
            console.log('registered props chatmessage');
            this.unregister = this.reporting_client.monitorMessage(this.props.messageId, this.monitorMessage);
        } else {
            console.log('emptied state props chatmessage');
            this.setState({message:{}})
        }
    }


    render() {
        var messageAuthor = this.state.message.author  == 'uCL9vKQ8K5dDrC0W7FBHBc5Qwpb2' ? 'me' : 'guest';
        var time = moment(this.state.message.date).format("HH:mm");
        var date = moment(this.state.message.date).format("DD.MM.YYYY");

        return (
               <div className={`chat ${messageAuthor}`}>
                    <p>{this.state.message.text}</p>
                    <span>{date} | {time} Uhr</span>
                </div>
        );
    }
}

export default ChatMessage;