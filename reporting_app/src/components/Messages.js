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
          dateTime: '09:34 Uhr',
          text: `  Hier steht dann eine Nachricht
            djosa
            kdjopsajdklasjdsa`,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Laudtee_Meenikunnos.jpg/800px-Laudtee_Meenikunnos.jpg',
          type: 'MessageRequest'
        }, {
          dateTime: '08:15 Uhr',
          text: `Super Tolles Bild
            ich bezahl dir
            1000000 Millionen
            ok?`,
          type: 'MessageResponse'
        }, {
          dateTime: '08:15 Uhr',
          text: `Ich machs für
            101001010101010 Millionen`,
          type: 'MessageResponse'
        }, {
          dateTime: '08:15 Uhr',
          text: `Dann halt NICHT
            Tschüss`,
          type: 'MessageResponse',
        }, {
          dateTime: '09:34 Uhr',
          text: `  Ja ok, ich machs
            EASZY
            GG WP`,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Laudtee_Meenikunnos.jpg/800px-Laudtee_Meenikunnos.jpg',
          type: 'MessageRequest'
        }, {
          dateTime: '09:34 Uhr',
          text: `Ja ok, ich machs
            EASZY
            GG WP`,
          type: 'MessageRequest'
        }, {
          dateTime: '09:34 Uhr',
          text: `  Ja ok, ich machs
            EASZY
            GG WP`,
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
