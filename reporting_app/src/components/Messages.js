import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ListView
} from 'react-native';
import MessageResponse from './MessageResponse';
import MessageRequest from './MessageRequest';




export default class reporting_app extends Component {

    constructor() {
      super();
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows([{
          dateTime: '12/11/2016 - 09:34 Uhr',
          text: 'Hier steht dann eine Nachricht',
          type: 'MessageRequest'
        }, {
          dateTime: '11/11/2016 - 08:15 Uhr',
          text: 'Wenn er will könnte hier seine Antwort stehen',
          type: 'MessageResponse'
        }, {
          dateTime: '11/11/2016 - 08:15 Uhr',
          text: 'Wenn er will könnte hier seine Antwort stehen',
          type: 'MessageResponse'
        }, {
          dateTime: '11/11/2016 - 08:15 Uhr',
          text: 'Wenn er will könnte hier seine Antwort stehen',
          type: 'MessageResponse'
        }, {
          dateTime: '12/11/2016 - 09:34 Uhr',
          text: 'Hier steht dann eine Nachricht',
          type: 'MessageRequest'
        }]),
      };
    }

    renderMessage = (Message) => {
      if (Message.type === 'MessageResponse'){
        return(
          <MessageResponse {...Message} style={styles.container}/>
        )
      }
      if(Message.type === 'MessageRequest'){
        return(
          <MessageRequest {...Message} style={styles.container}/>
        )
      }

    }


  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderMessage}
        />
      </View>
    );
  }
}

var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdc3c7',
    marginTop: 29
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
