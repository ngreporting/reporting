import React, { Component } from 'react';
import './chatFooter.css';
import ReportingClient from '../../reporting_client';

class ChatFooter extends Component {
    constructor(props) {
        super(props);
        this.reporting_client = new ReportingClient();
        this.state = {
            value: ''
        }
    }
    handleChange(e){
        this.setState({value:e.target.value});
    }
    sendForm(){
        if (this.props.currentThread) {
            this.reporting_client.addMessage(this.props.currentThread, this.state.value);
        } else {
            console.dir(this.props.currentThread)
            console.dir(this.props.currentReport)
            console.dir( this.state.value)
            const thread = this.reporting_client.addThread(this.props.currentReport, this.state.value);
            this.props.setCurrentThread(thread, this.props.currentReport)
        }
        this.setState({value: ''});
    }

    render() {

        return (
            <div className="footer">
                <input ref="notes" onChange={this.handleChange.bind(this)} value={this.state.value} type="text" className="chatInput" placeholder="Schreibe eine Nachricht"/>
                <i onClick={this.sendForm.bind(this)} className="ion-ios-paper-plane"></i>
            </div>
        );
    }
}

export default ChatFooter;