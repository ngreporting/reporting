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
  StatusBar
} from 'react-native';
import ThreadCard from '../components/ThreadCard'
import Messages from '../components/Messages'

class ThreadPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: '...'
    }
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


      <Messages/>
        <View style={{ backgroundColor: '#DDD', margin: 10}}>

          <TextInput
            autoFocus
            style={{height: textInputHeight}}
            onChangeText={(message) => this.setState({message})}
            value={this.state.message} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

export default ThreadPage
