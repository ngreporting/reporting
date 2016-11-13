import React, { Component } from 'react';
import './chatMessage.css';
import ReportingClient from '../../reporting_client';

import moment from "moment"


class ChatMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {message:{}};
        this.reporting_client = new ReportingClient();
    };
    monitorMessage =(message)=> {
        this.setState({message})
    };


    componentWillMount(){
        this.reporting_client.monitorMessage(this.props.messageId, this.monitorMessage);
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