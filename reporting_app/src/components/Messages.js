import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import MessageResponse from './MessageResponse';
import MessageRequest from './MessageRequest';

export default class reporting_app extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MessageResponse style={styles.container}/>
        <MessageRequest style={styles.container}/>
        <MessageRequest style={styles.container}/>
        <MessageRequest style={styles.container}/>
        <MessageResponse style={styles.container}/>
        <MessageRequest style={styles.container}/>
      </View>
    );
  }
}

var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdc3c7',
    marginTop: 60
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  nav: {
    paddingLeft: 100,
    paddingRight: 100,
    backgroundColor: '#3498db',
    height: 10

  },
  text: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center'
  }
});
