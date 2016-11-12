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
import ThreadPage from './pages/ThreadPage';
import Messages from './components/Messages';
import ReportingClient from 'reporting_client';
import { reportsChanged } from './actions/index.js';
import { connect } from 'react-redux';


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

class reporting_app extends Component {
  constructor (props) {
    super(props)
    this.client = new ReportingClient()
  }

  componentDidMount () {
    this.client.onReportsChange((reports) => {
        this.props.reportsChanged(reports)
    })
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

function mapStateToProps (state) {
  return {}
}
var connectedReportingApp = connect(mapStateToProps, { reportsChanged })(reporting_app)



export default connectedReportingApp