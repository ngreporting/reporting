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
          <Text style={styles.text}> {this.props.text} </Text>
        </View>
        <Text style={styles.dateTime}> {this.props.dateTime}  </Text>
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
