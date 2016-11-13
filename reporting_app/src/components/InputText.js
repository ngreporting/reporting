import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ListView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Message from './Message';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';


export default class reporting_app extends Component {

constructor(props){
  super(props);
  this.state = {
    text: ""
  };
}

  showPicker() {
    ImagePicker.showImagePicker(null, (response) => {
      console.log('Response = ', response);
     
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        // You can display the image using either data... 
        const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true, data: response.data};
     
        // or a reference to the platform specific asset location 
        if (Platform.OS === 'ios') {
          //const source = {uri: response.uri.replace('file://', ''), isStatic: true};
        } else {
          //const source = {uri: response.uri, isStatic: true};
        }
     
        this.setState(Object.assign({}, this.state, {
          picture: source
        }));
      }
    });
  }


  render() {

    var {width, height} = Dimensions.get('window')
    var textInputHeight = width < 1000? 40:40;

    var picture
    if (this.state.picture) {
      picture = <Image source={this.state.picture} style={{width: 50, height: 50}} />
    } else {
      picture = <TouchableOpacity
            onPress={this.showPicker.bind(this)}
            style={styles.navBarRightButton}>
            <Icon name="picture-o" size={40} color="#f49919" style={{}}/>
          </TouchableOpacity>
    }

    return (

      <View style={{ backgroundColor: '#2c3e50' , padding: 10, marginBottom: this.state.marginBottom, flexDirection: 'row'}}>

        <TextInput
          returnKeyType='send'
          onSubmitEditing={() => {
              this.props.onSend(this.state)
              this.setState({text: '', picture: null})
            }}
          onFocus={()=>{
            this.setState(Object.assign({}, this.state, {marginBottom: 265}))
          }}
          onEndEditing={()=>{
            this.setState(Object.assign({}, this.state, {marginBottom: 0}))
          }}
          style={{height: textInputHeight, width: (width-70), color: '#FFF'}}
          value={this.state.text}
          onChangeText={(text) => this.setState({text})}
          content={this.state.text} />
          {picture}
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
