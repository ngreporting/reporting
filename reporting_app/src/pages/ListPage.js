import React, { Component } from 'react';
import {
  Text,
  KeyboardAvoidingView,
  ListView,
  StyleSheet,
  View,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import ReportCard from '../components/ReportCard';
import { reportsChanged } from '../actions/index.js';
import ReportingClient from 'reporting_client';
import InputText from '../components/InputText';

class ListPage extends Component {
  constructor(props) {
    super(props);
    this.reporting_client = new ReportingClient();
    this.state = {
      reports:[]
    };
  }

  reportsChanged = (reports) =>  {
    this.setState({
      reports
    })
  }

  componentDidMount(){
    this.killMonitor = this.reporting_client.monitorReports(this.reportsChanged);
  }

  componentWillUnmount() {
    this.killMonitor()
  }


  renderReportCard = (report) => {
    return (<ReportCard {...report} navigator={this.props.navigator} />)
  }

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var dataSource = ds.cloneWithRows(this.state.reports);
    return (
      <View  style={{flex: 1, marginTop: 30, padding: 0}} behavior='height' keyboardVerticalOffset={30}
        onKeyboardChange={(event) => {
          console.log('change', event)
        }}>

      <StatusBar
       backgroundColor="#2c3e50"
       barStyle="light-content"
      />

        <ListView
          enableEmptySections
          dataSource={dataSource}
          renderRow={this.renderReportCard}
        />


        <InputText onSend={(text) => this.reporting_client.addReport({
          text
          // position
        })} />


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
