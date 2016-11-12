import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';
import ReportClient from 'reporting_client'

export default class ThreadRow extends Component {
  constructor(props) {
    super(props)
    this.ReportClient = new ReportClient()
    this.state = {
      thread: {}
    }
  }

  monitorThread = (thread) => {
    this.setState({thread})
  }

  componentDidMount() {
    this.ReportClient.monitorThread(this.props.threadId, this.monitorThread)
  }

  render() {
    var count = this.state.thread.messages ? this.state.thread.messages.length : ''
    return (
      <View style={{padding: 10, marginBottom: 1, backgroundColor: '#333', flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={{color: '#DDD'}}>{ this.state.thread.responder }</Text>
      <Text style={{color: '#DDD'}}>{ count }</Text>
      </View>
    );
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
