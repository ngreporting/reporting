import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  TouchableHighlight,
  Text,
  ListView,
  StyleSheet,
  View
} from 'react-native';
import ReportClient from 'reporting_client';
import ThreadRow from './ThreadRow';

class ReportCard extends Component {

  constructor (props){
    super(props);
    this.ReportClient = new ReportClient();
  }

  monitorReport = (report) => {
    this.setState({report});
  }

  componentDidMount(){
    this.killMonitor = this.ReportClient.monitorReport(this.props.reportId, this.monitorReport);
  }

  componentWillUnmount() {
    this.killMonitor()
  }

  render() {
    const {width, height} = Dimensions.get('window')

    var header
    if (this.props.image) {
      header = <Image
          style={{width: width-20, height: width/2}}
          source={{uri: this.props.image}}
        />
    } else {
      header = <Text style={{padding: 10, color: '#FFF'}}>{this.props.text}</Text>
    }

    var threadRows = []
    if (this.props.threads) {
      Object.keys(this.props.threads).map((threadId) => {
        threadRows.push(<ThreadRow key={threadId} threadId={threadId} navigator={this.props.navigator} />)
      })
    }

    return (
        <View
        style={{margin: 10, marginBottom: 0, backgroundColor: '#3597d3'}}>
          { header }
          { threadRows }
        </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 64
  }
});

export default ReportCard
