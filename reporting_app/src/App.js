/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Navigator,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import ListPage from './pages/ListPage';
import Messages from './components/Messages';


var NavigationBarRouteMapper = {
  Title: function(route, navigator){
    return (
      <Text style={styles.text}> {route.title} </Text>
    );
  },

  LeftButton: function(){
    return (
      <TouchableOpacity
        onPress={() => navigator.push(newRandomRoute())}
        style={styles.navBarRightButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
           Zurück
        </Text>
      </TouchableOpacity>
    );
  },

  RightButton: function(){
    return null
  }
};

export default class reporting_app extends Component {

  renderScene(route, navigator) {
    if (route.index === 0) {
      return <ListPage navigator={navigator} />
    }

    if (route.index === 1) {
      return <Messages />
    }
  }


  render() {
    return (
      <Navigator
        initialRoute={{index: 0 }}
        renderScene={this.renderScene}
        style={styles.container}
        navigationBar={
          <Navigator.NavigationBar
          routeMapper={NavigationBarRouteMapper}
          style={{backgroundColor: 'red',
                  height: 45}}
          />
        }/>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16

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
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30

  }
});

AppRegistry.registerComponent('reporting_app', () => reporting_app);
