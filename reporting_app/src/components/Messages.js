import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ListView
} from 'react-native';
import Message from './Message';

export default class reporting_app extends Component {

    renderMessage = (messageId) => {
        return(
          <Message messageId={messageId} style={styles.container}/>
        )
    }


  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var dataSource =  ds.cloneWithRows(this.props.messages|| []);


    return (
      <View style={styles.container}>
        <ListView
          dataSource={dataSource}
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
