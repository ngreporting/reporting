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
  render() {
    return (

        <Navigator
        initialRoute={{ title: 'Awesome Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <Messages style={styles.container}/>
        }
        navigationBar={
          <Navigator.NavigationBar
          routeMapper={NavigationBarRouteMapper}
          style={{backgroundColor: 'red',
                  height: 45}}
          />
        }
        style={styles.nav}/>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdc3c7',
    margin: 10

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
    fontSize: 40

  }
});

AppRegistry.registerComponent('reporting_app', () => reporting_app);
