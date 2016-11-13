import React, { Component } from 'react';
import './chatFooter.css';
import ReportingClient from '../../reporting_client';

class ChatFooter extends Component {
    constructor(props) {
        super(props);
        this.reporting_client = new ReportingClient();
    }
    handleChange(e){
        this.setState({value:e.target.value});
    }
    sendForm(){
        this.reporting_client.addMessage(this.props.threadId, this.state.value);
    }

    render() {

        return (
            <div className="footer">
                <input ref="notes" onChange={this.handleChange.bind(this)}  type="text" className="chatInput" placeholder="Schreibe eine Nachricht"/>
                <i onClick={this.sendForm.bind(this)} className="ion-ios-paper-plane"></i>
            </div>
        );
    }
}

export default ChatFooter;