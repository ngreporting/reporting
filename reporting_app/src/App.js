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
  Dimensions,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ListPage from './pages/ListPage';
import ThreadPage from './pages/ThreadPage';
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
          <View style={{marginLeft: 10, marginTop: 5}}>
            <Icon name="chevron-circle-left" size={30} color="white" style={{left: 0}} />
          </View>
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

          <View style={{marginRight: 40, marginTop: 5}}>
            <Icon name="info-circle" size={30} color="white" style={{left: 0}} />
          </View>

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
      return <ThreadPage />
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
          style={{backgroundColor: '#8498db',
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
    backgroundColor: 'white',
    opacity: 0.7,
    margin: 2,
    borderRadius: 5,
    color: 'blue',
    fontSize: 30
  }
});

AppRegistry.registerComponent('reporting_app', () => reporting_app);
