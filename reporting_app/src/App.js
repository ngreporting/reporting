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
  TouchableOpacity,
  Dimensions
} from 'react-native';

import ListPage from './pages/ListPage';
import Messages from './components/Messages';


var NavigationBarRouteMapper = {
  Title: function(route, navigator){
    return (
      <Text style={styles.titleText}> {route.title} </Text>
    );
  },

  LeftButton: function(route, navigator){
    if (route.index != 0){
      return (
        <TouchableOpacity
          onPress={() => navigator.pop()}
          style={styles.navBarRightButton}>
          <Text style={[styles.navBarText, styles.navBarButtonText]}>
             {`< Zurück`}
          </Text>
        </TouchableOpacity>
      );
    }
  },

  RightButton: function(route, navigator){
    if (route.index === 0){
      return (
        <TouchableOpacity
          //onPress={() => navigator.push()}
          style={styles.navBarRightButton}>
          <Text style={[styles.navBarText, styles.navBarButtonText]}>
             INFO
          </Text>
        </TouchableOpacity>
      );
  }
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
        initialRoute={{index: 0, title: 'Olepsy'}}
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

var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16
  },
  titleText: {
    marginTop: 10,
    marginLeft: (width*0.4),
    color: 'white',
    fontSize: 30
  },
  navBarText: {
    color: 'blue',
    fontSize: 30
  }
});

AppRegistry.registerComponent('reporting_app', () => reporting_app);
