import React, { Component } from 'react';
import {
  Button,
  Dimensions,
  Text,
  ListView,
  StyleSheet,
  TextInput,
  View,
  PixelRatio,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import Messages from '../components/Messages'
import Icon from 'react-native-vector-icons/FontAwesome';
import ReportingClient from 'reporting_client';
import InputText from '../components/InputText';

class ThreadPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: '...',
      thread: {}
    }
    this.client = new ReportingClient();
  }

  monitorThread = (thread) => {
    this.setState({thread});
  }

  componentDidMount() {
    this.killMonitor = this.client.monitorThread(this.props.threadId, this.monitorThread)
  }

  componentWillUnmount() {
    this.killMonitor()
  }

  render() {
    var {width, height} = Dimensions.get('window')
    var textInputHeight = width < 1000? 20:40;
    console.log(width, height, PixelRatio.get())


    return (
      <View style={{flex: 1, marginTop: 30}}>
      <StatusBar
       backgroundColor="#8498db"
       barStyle="light-content"
      />


      <Messages messages= {this.state.thread.messages}/>
      <InputText onSend={(message) => this.client.addMessage(this.props.threadId, message)}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
});

export default ThreadPage
