/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import AppStorage from './src/AppStorage'

export default class reporting_app extends Component {
  render() {
    return (
      <AppStorage />
    );
  }
}

AppRegistry.registerComponent('reporting_app', () => reporting_app);
