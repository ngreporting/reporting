import React, { Component } from 'react';
import {
  Button,
  Dimensions,
  Text,
  ListView,
  StyleSheet,
  TextInput,
  View
} from 'react-native';
import ThreadCard from '../components/ThreadCard'

class ThreadPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: '...'
    }
  }

  render() {
    var {width, height} = Dimensions.get('window')
    console.log(width, height)
    return (
      <View style={{flex: 1, marginTop: 30}}>
        <View style={{ backgroundColor: '#DDD', margin: 10}}>
          <TextInput 
            autoFocus
            style={{height: 20}} 
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