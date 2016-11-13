import React, { Component } from 'react';
import ReportingClient from '../../reporting_client';
import ReportRow from '../ReportRow/reportRow';

class MonitoringReportRow extends Component {
    constructor(props){
        super(props);
        this.client = new ReportingClient();
        this.state = {report:{}};
    }

    componentDidMount(){
        this.unregister = this.client.monitorReport(this.props.reportUid, (report)=> this.setState({report}));
    }

    render(){
        return (<ReportRow selected={this.props.selected} report={this.state.report}/>);

    }
}

export default MonitoringReportRow
