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
  StatusBar,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ListPage from './pages/ListPage';
import ThreadPage from './pages/ThreadPage';
import Messages from './components/Messages';
import ReportingClient from 'reporting_client';
import { reportsChanged } from './actions/index.js';
import { connect } from 'react-redux';


var navBarMargin = (Platform.OS === 'ios') ? 0:5;
var NavigationBarRouteMapper = {
  Title: function(route, navigator){
    return (
      <Text style={[styles.titleText,{margin: navBarMargin}]}> {route.title} </Text>
    );
  },

  LeftButton: function(route, navigator){
    if (route.index != 0){
      var iconSize = (Platform.OS === 'ios') ? 20:30;
      return (
        <TouchableOpacity
          onPress={() => navigator.pop()}
          style={styles.navBarRightButton}>
          <View style={{marginLeft: 10, marginTop: navBarMargin}}>
            <Icon name="chevron-circle-left" size={iconSize} color="white" style={{left: 0}} />
          </View>
        </TouchableOpacity>
      );
    }
  },

  RightButton: function(route, navigator){
    if (route.index === 0){
      var iconSize = (Platform.OS === 'ios') ? 20:30;
      return (
        <TouchableOpacity
          //onPress={() => navigator.push()}
          style={styles.navBarRightButton}>

          <View style={{marginRight: 30, marginTop: navBarMargin}}>
            <Icon name="info-circle" size={iconSize} color="white" style={{left: 0}} />
          </View>

        </TouchableOpacity>
      );
  }
}
};

class reporting_app extends Component {
  constructor (props) {
    super(props)
    this.client = new ReportingClient()
  }



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
var titleTextHeight = (Platform.OS === 'ios') ? 16:30;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16
  },
  titleText: {
    textAlign: 'center',
    color: 'white',
    fontSize: titleTextHeight
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


function mapStateToProps (state) {
  return {}
}
var connectedReportingApp = connect(mapStateToProps, { reportsChanged })(reporting_app)



export default connectedReportingApp
