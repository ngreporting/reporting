import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

export default class reporting_app extends Component {
  render() {
    return (
      <View style={styles.view}>
        <View style={styles.container}>
          <Text style={styles.text}> {this.props.message.text}</Text>
        </View>
        <Text style={styles.dateTime}> {this.props.message.dateTime}  </Text>
      </View>
    );
  }
}

var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    marginRight: (width * 0.2),
    marginBottom: 0,
    borderRadius: 7
  },
  text: {
    color: '#2c3e50',
    fontSize: 20
  },
  dateTime: {
    backgroundColor: '#ecf0f1',
    width: width,
    opacity: 1,
    color: 'black',
    fontSize: 15,
    left: 15
  },
  view: {
    width: width,
  }
});
