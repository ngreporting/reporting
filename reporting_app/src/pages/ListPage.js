import React, { Component } from 'react';
import {
  Text,
  ListView,
  StyleSheet,
  View,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import ThreadCard from '../components/ThreadCard';
import { reportsChanged } from '../actions/index.js';
import ReportingClient from 'reporting_client';

class ListPage extends Component {
  constructor(props) {
    super(props);
    this.reporting_client = new ReportingClient();
    this.state = {reports:[]};
  }

  reportsChanged = (reports) =>  {
    this.setState({
      reports
    })
  }

  componentDidMount(){
    this.reporting_client.onReportsChange(this.reportsChanged);
  }

  renderThreadCard = (thread) => {
    return (<ThreadCard {...thread} navigator={this.props.navigator} />)
  }

  render() {
    console.log(this.state.reports);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var dataSource = ds.cloneWithRows(this.state.reports);
    return (
      <View style={{flex: 1, marginTop: 30}}>

      <StatusBar
       backgroundColor="#8498db"
       barStyle="light-content"
      />

        <ListView
          dataSource={dataSource}
          renderRow={this.renderThreadCard}
        />
      </View>


    );
  }
}

const styles = StyleSheet.create({
});



function mapStateToProps (state) {
  return {
    reports: state.reports
  }
}

export default connect(mapStateToProps, {reportsChanged})(ListPage)
