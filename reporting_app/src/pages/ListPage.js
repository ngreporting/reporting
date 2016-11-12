import React, { Component } from 'react';
import {
  Button,
  Text,
  ListView,
  StyleSheet,
  View
} from 'react-native';
import ThreadCard from '../components/ThreadCard'

class ListPage extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([{
        text: 'Hier ein längerer Text über ein tolles Ereignis.',
        responderName: 'SWR | Werner Pastula',
        responderCount: 3
      }, {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Laudtee_Meenikunnos.jpg/800px-Laudtee_Meenikunnos.jpg',
        responderName: 'SWR | Werner Pastula',
        responderCount: 3
      }]),
    };
  }

  renderThreadCard = (thread) => {
    return (<ThreadCard {...thread} navigator={this.props.navigator} />)
  }

  render() {
    return (
      <View style={{flex: 1, marginTop: 30}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderThreadCard}
        />
        <View style={{ backgroundColor: '#DDD', margin: 10}}>
          <Button title='Neuer Bericht' onPress={() => {
            this.props.navigator.push({index: 1})
          }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

export default ListPage