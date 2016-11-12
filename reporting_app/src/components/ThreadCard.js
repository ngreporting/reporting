import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  TouchableHighlight,
  Text,
  ListView,
  StyleSheet,
  View
} from 'react-native';

class ThreadCard extends Component {

  onPress = (event) => {
    event
  }

  render() {
    const {width, height} = Dimensions.get('window')

    var header
    if (this.props.image) {
      header = <Image
          style={{width: width-20, height: width/2}}
          source={{uri: this.props.image}}
        />
    } else {
      header = <Text style={{padding: 10, color: '#333'}}>{this.props.text}</Text>
    }

    return (
      <TouchableHighlight
        onPress={() => {
          this.props.navigator.push({index: 1, title: 'SWR 3'})
        }}
        style={{margin: 10, marginBottom: 0, backgroundColor: '#DDD'}}>
        <View>
          { header }
          <View style={{padding: 10, backgroundColor: '#333', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: '#DDD'}}>{this.props.responderName}</Text>
            <Text style={{color: '#DDD', fontWeight: 'bold'}}>{this.props.responderCount}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 64
  }
});

export default ThreadCard
