import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';
import ReportingClient from 'reporting_client';
import MessageRequest from './MessageRequest';
import MessageResponse from './MessageResponse';

export default class reporting_app extends Component {

constructor(props){
  super(props);
  this.state = {message:{}};
  this.ReportingClient = new ReportingClient();
}

monitorMessage = (message) => {
  this.setState({message});
}

componentDidMount(){
  this.killMonitor = this.ReportingClient.monitorMessage(this.props.messageId, this.monitorMessage);
}

componentWillUnmount() {
  this.killMonitor()
}

  render() {
    var img;
    if (this.props.image) {
      img = <Image
          style={{width: width-20, height: width/2}}
          source={{uri: this.props.image}}
        />
    }
    var msg;
    if(this.state.message.author === this.ReportingClient.user.uid){
      msg = <MessageRequest message = {this.state.message}/>;
    } else{
      msg = <MessageResponse message = {this.state.message}/>;
    }

    return msg;
  }
}

var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8498db',
    margin: 20,
    marginBottom: 0,
    marginLeft: (width * 0.2),
    borderRadius: 7
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginBottom: 0
  },
  dateTime: {
    backgroundColor: '#ecf0f1',
    width: width,
    opacity: 1,
    color: 'black',
    fontSize: 15,
    left: (width*0.93)
  },
  view: {
    width: width,
  }
});
