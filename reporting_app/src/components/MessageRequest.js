import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';

export default class reporting_app extends Component {
  render() {
    var date = new Date(this.props.message.date)
    var img;
    if (this.props.image) {
      img = <Image
          style={{width: width-20, height: width/2}}
          source={{uri: this.props.image}}
        />
    }
    return (
      <View style={styles.view}>
        <View style={styles.container}>
          {img}
          <Text style={styles.text}> {this.props.message.text} </Text>
        </View>
        <Text style={styles.dateTime}>{date.toLocaleString('de')}</Text>
      </View>
    );
  }
}

var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f49919',
    margin: 15,
    marginBottom: 0,
    marginLeft: (width * 0.2)
  },
  text: {
    color: 'white',
    fontSize: 18,
    padding: 6,
    marginBottom: 0
  },
  dateTime: {
    color: '#777',
    width: width,
    fontSize: 15,
    textAlign: 'right',
    paddingRight: 20
  },
  view: {
    width: width,
  }
});
