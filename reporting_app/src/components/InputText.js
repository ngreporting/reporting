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
  this.state = {
    text: ""
  };
}


  render() {

    var {width, height} = Dimensions.get('window')
    var textInputHeight = width < 1000? 40:40;
    return (

      <View style={{ backgroundColor: '#2c3e50' , padding: 10, marginBottom: this.state.marginBottom, flexDirection: 'row'}}>

        <TextInput
          onFocus={()=>{
            this.setState(Object.assign({}, this.state, {marginBottom: 253}))
          }}
          onEndEditing={()=>{
            this.setState(Object.assign({}, this.state, {marginBottom: 0}))
          }}
          style={{height: textInputHeight, width: (width-70), color: '#FFF'}}
          value={this.state.text}
          onChangeText={(text) => this.setState({text})}
          content={this.state.text} />

          <TouchableOpacity
            onPress={() => {
              this.props.onSend(this.state.text)
              this.setState({text: ''})
            }}
            style={styles.navBarRightButton}>
            <Icon name="paper-plane" size={40} color="#f49919" style={{}}/>
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
