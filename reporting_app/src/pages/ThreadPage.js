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
  StatusBar,
  TouchableOpacity
} from 'react-native';
import ThreadCard from '../components/ThreadCard'
import Messages from '../components/Messages'
import Icon from 'react-native-vector-icons/FontAwesome';

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
        <View style={{ backgroundColor: 'white',borderRadius: 7 , margin: 10, width: (width*0.98), flexDirection: 'row'}}>

          <TextInput
            autoFocus
            style={{height: textInputHeight, width: (width*0.95)}}
            onChangeText={(message) => this.setState({message})}
            value={this.state.message} />

            <TouchableOpacity
              onPress={() => alert(this.state.message)}
              style={styles.navBarRightButton}>
              <Icon name="paper-plane" size={30} color="#8498db" style={{}}/>
            </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
});

export default ThreadPage
