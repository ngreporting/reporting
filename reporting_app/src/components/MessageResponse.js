import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

export default class reporting_app extends Component {
  render() {
    var date = new Date(this.props.message.date)
    return (
      <View style={styles.view}>
        <View style={styles.container}>
          <Text style={styles.text}> {this.props.message.text}</Text>
        </View>
        <Text style={styles.dateTime}>{date.toLocaleString('de')}</Text>
      </View>
    );
  }
}

var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3597d3',
    margin: 10,
    marginRight: (width * 0.2),
    marginBottom: 0,
    borderRadius: 7
  },
  text: {
    color: '#FFF',
    fontSize: 18,
    padding: 6
  },
  dateTime: {
    width: width,
    color: '#777',
    fontSize: 15,
    left: 15
  },
  view: {
    width: width,
  }
});
