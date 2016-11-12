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
          <Text style={styles.dateTime}> 11/11/2016 23:59  </Text>
          <Text style={styles.text}> {
            `
             Lorem ipsum dolor sit amet,
             consetetur sadipscing elitr,
             sed diam nomun dnsaoidas tomeod indnd.
            `}</Text>
        </View>
      </View>
    );
  }
}

var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
    margin: 10,
    marginLeft: (width * 0.2),
    borderRadius: 7
  },
  text: {
    color: 'white',
    fontSize: 20
  },
  dateTime: {
    color: 'white',
    position: 'absolute',
    fontSize: 15,
    left: 0
  },
  view: {
    width: width,
  }
});
