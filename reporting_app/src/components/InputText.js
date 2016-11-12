import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ListView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Message from './Message';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class reporting_app extends Component {

constructor(props){
  super(props);
  this.state = {messages:{}};
}


  render() {

    var {width, height} = Dimensions.get('window')
    var textInputHeight = width < 1000? 20:40;
    return (

      <View style={{ backgroundColor: 'white',borderRadius: 7 , margin: 10, width: (width*0.98), flexDirection: 'row'}}>

        <TextInput
          autoFocus
          style={{height: textInputHeight, width: (width-60)}}
          onChangeText={(message) => this.setState({message})}
          value={this.state.message} />

          <TouchableOpacity
            onPress={this.props.onPress}
            style={styles.navBarRightButton}>
            <Icon name="paper-plane" size={30} color="#8498db" style={{}}/>
          </TouchableOpacity>
      </View>


    );
  }
}

var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    marginTop: 0
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
